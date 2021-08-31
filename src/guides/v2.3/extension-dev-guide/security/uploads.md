---
group: php-developer-guide
title: Working with files
---

When working with files, especially user-uploaded files, it is easy to make a mistake and open your store to dangerous
attacks like Path Traversal and RCE. Magento framework provides abstraction that help safely work with user files,
but it's up for developers to use it the right way.

## When you don't need a file
There are cases when users can upload files for their own convenience. For instance, consider a functionality that allows
customers to upload a `.csv` file with the list of SKUs and quantities to add products to their cart. We don't need to
store the file, we only need it's contents to add those SKUs to cart. One option is to read the uploaded file, add
SKUs and delete it without ever moving it from the system temporary folder. Another, even better option for security and
performance, is to never upload the file in the first place. The file can be handled on the frontend side using JavaScript
to extract SKUs and quantities and send those to a web API endpoint on the server.
Important thing to note is that's the best way to avoid issues with files is to not upload or store them in the first place
if you don't have to.

## Files inaccessible by users
Some files, generated or uploaded, need to be stored on a server for further processing or querying, but not directly
accessible through a URL. Below are measures to avoid potential unauthorized access, path traversal or RCE problems
from such files:
* use random file names and extensions (better no extension), do not trust file names provided by users
* store files in a directory specifically for generated/uploaded files
* do not store these files in an HTTP accessible folder (like `/pub`)
* store file records in DB if files need to be assigned to an entity
* do not trust user provided file name/ID when deleting files, validate file ownership through DB

`Magento\Framework\Filesystem` class can help find the right folder to store the files. Usually,
generated or inaccessible files are stored in the `/var` directory. See examples below:

```php
class MyClass {
    private \Magento\Framework\Filesystem $filesystem;
    
    private \Magento\Framework\Filesystem\Directory\WriteFactory $writeFactory;
    
    private \Magento\Framework\Math\Random $rand;
    
    public function __construct(
        \Magento\Framework\Filesystem $filesystem,
        \Magento\Framework\Filesystem\Directory\WriteFactory $writeFactory,
        \Magento\Framework\Math\Random $rand
    ) {
        $this->filesystem = $filesystem;
        $this->writeFactory = $writeFactory;
        $this->rand = $rand;
    }
    
    ...
    
    public function workWithFiles(): void {
        ...
        
        //To read "MAGENTO_ROOT/var" sub-directories or files.
        $varDir = $this->filesystem->getDirectoryRead(\Magento\Framework\App\Filesystem\DirectoryList::VAR_DIR);
        //Going to write files into a designated folder specific to these type of files and functionality
        //Getting WriteInterface instance of `MAGENTO_ROOT/var/my-modules-dir`
        $thisModulesFilesDir = $this->writeFactory->create($varDir->getAbsolutePath('my-modules-dir'));
        
        //Random file name
        $randomFileName = $this->rand->getRandomString(32);
        //Copying a file from the system temporary directory into it's new path
        $thisModulesFilesDir->getDriver()
            ->copy($tmpUploadedOrGeneratedFilePath, $thisModulesFilesDir->getAbsolutePath($randomFileName));
    }
}
```

## Files that require authorization
Files that require any additional authorization before being downloaded need to be treated the same as inaccessible files
with a controller that performs authorization and only then serves the files by outputting it's content in response body.

## Publicly accessible media files
Publicly accessible media files require special care due to a higher risk caused by having to keep user provided path
and extension. Things to verify:
* media files can only be placed in a publicly accessible path
* uploaded file path is inside the designated folder, or it's sub-directories
* extension is safe (use an allow-list)
* file path is out of "system" folders where other files are placed by Magento
* prevent deleting system files in public folders
* ideally, validate ownership of files, or at least directories when updating or deleting files

Notes:
* Magento uses `\Magento\Framework\App\Filesystem\DirectoryList::PUB` directory for public files. 
* Uploaded file path has to be validated by using `ReadInterface` and `WriteInterface` instances similar to the example above.
* `\Magento\Framework\Filesystem\Io\File` can help to extract extension from a filename.

Example of an imaginary class dealing with media files:
```php
class MyFileUploader {
    private const UPLOAD_DIR = 'my-module/customer-jpegs';

    private \Magento\Framework\Filesystem\Io\File $fileUtil;
    
    private array $allowedExt = ['jpg', 'jpeg'];
    
    private \Magento\Framework\Filesystem\Directory\WriteFactory $writeFactory;
    
    private \Magento\Framework\Filesystem $filesystem;

    /**
      * @param string $customerId UserContextInterface::getUserId() - current customer
      * @param array $uploadedFileData uploaded file data from $_FILES
      * @return MediaFile
      * @throws \Magento\Framework\Exception\ValidatorException
      */
    public function upload(string $customerId, array $uploadedFileData): MediaFile
    {
        //Get upload file's metadata
        $info = $this->fileUtil->getPathInfo($uploadedFileData['name']);
        //Validate extension is allowed
        if (!in_array($info['extension'], $this->allowedExt, true)) {
            throw new ValidationException('Only JPEG files allowed');
        }
        
        //Initiate WriteInterface instance of the target directory
        //Target dir is a sub-dir of PUB
        $uploadDir = $this->writeFactory->create(
            $this->filesystem->getDirectoryRead(\Magento\Framework\App\Filesystem\DirectoryList::PUB)
                ->getAbsolutePath(self::UPLOAD_DIR)
        );
        //Get target path if uploaded to the dir
        $realPath  =$uploadDir->getDriver()->getRealPathSafety($uploadDir->getAbsolutePath($uploadedFileData['name']));
        
        //Validate that the target file name is not a system file
        $this->validateNotSystemFile($realPath);
        //Validate that target folder (UPLOAD_DIR + ['name'] - ['basename']) is not a system folder
        $this->validateNotSystemFolder(preg_replace('/[^/]+$', '', $realPath));
        //Validate that given file doesn't exist or is own by current customer
        $existingMediaFileInfo = $this->findFileByRelativePath($realPath);
        if ($existingMediaFileInfo && $existingMediaFileInfo->getCustomerId() !== $customerId) {
            throw new ValidationException('Access denied');
        }
        
        //Copy temp file to target path
        $uploadDir->getDriver()->copy(
            $uploadedFileData['tmp_name'],
            $realPath
        );
        
        //Persist file info
        $mediaFile = new MediaFile($customerId, $realPath);
        return $this->persist($mediaFile);
    }
}
```
