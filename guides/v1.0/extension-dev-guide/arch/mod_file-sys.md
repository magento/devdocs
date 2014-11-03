---
layout: howtom2devgde_chapters
title: Magento modular file system
---
 
<h1 id="m2devgde-mod-file-sys">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}guides/v1.0/architecture/modules/mod-file-system.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="mod-file-sys-intro">Introduction to the Magento 2 file system</h2>

<p class="q">Reviewer: This information was outdated when I saw it. I did my best to update it in a limited time. Please read it very carefully and validate everything.</p>

The <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem.php" target="_blank">Magento\Framework\Filesystem</a> class handles interactions with files in Magento. In earlier Magento versions, the `Dir` class was responsible for managing and customizing the file system. In Magento 2, this class was refactored and renamed `Magento\Framework\Filesystem`. 

<h2 id="mod-file-sys-struct">Magento file system structure</h2>

The main components of the Magento file system are:

*	The <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem.php" target="_blank">Framework/Filesystem.php class</a>, which retrieves objects from a directory with read or write access rights.
*	The <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/Filesystem.php" target="_blank">Framework/App/Filesystem.php class</a>, which retrieves the path of files on the Magento file system.
*	The <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/DirectoryList.php" target="_blank">DirectoryList.php</a> class, which stores directory configurations.
*	Classes in <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/Directory" target="_blank">the Directory directory</a>, which facilitate the handling of directories.
*	Classes in <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/Driver" target="_blank">the Driver directory</a>, which perform all operations with the file system.

<h2 id="mod-file-sys-manage">Manage the file system</h2>

The `Magento\Framework\Filesystem` class is an entry point to the file system. This class enables you to:

*	Create an instance of a directory with permission to read using the `getDirectoryRead()` method
*	Create an instance of a directory with permission to write using the `getDirectoryWrite()` method
*	Retrieve the URI of a directory using the `getUri()` method


<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>Not to be confused with <code>Magento\Framework\Filesystem</code>, the <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/Filesystem.php" target="_blank">Magento\Framework\App\Filesystem class</a> enables you to get the absolute path to files on the Magento file system similar to the following:</p>
  <pre>
$filesystem = $objectManager->get('Magento\Framework\App\Filesystem');
$absolutePathToVarDirectory = $filesystem->getPath(Filesystem::VAR_DIR);
</pre>
  </span>
  </div>

The <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/DirectoryList.php" target="_blank">Magento\Framework\Filesystem\DirectoryList</a> class defines the default settings for primary and system directories.

<p class="q">Reviewer: DirectoryList/Configuration.php does not exist. Should this point instead to the DirectoryList class?</p>

At the second phase of bootstrap, the <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/Filesystem/DirectoryList/Configuration.php" target="_blank">Magento\Framework\App\Filesystem\DirectoryList\Configuration</a> class retrieves data. Use the `configure()` method to add directories from configurations to the file system.

You can configure the directories in the `system/filesystem/directory` node of <a href="{{ site.mage2000url }}app/code/Magento/Core/etc/config.xml" target="_blank">config.xml</a>. A snippet follows:

<script src="https://gist.github.com/xcomSteveJohnson/dcf87e18b271544b3d38.js"></script>

In the preceding example:

*	`directory` and `var` are placeholders for real directory names.
*	`path` is the path to a directory in a module's root directory.
*	`uri` is URI of a directory.
*	`read_only` specifies whether a directory can be retrieved from the file system by the `getDirectoryWrite()` method.
*	`allow_create_dirs` specifies whether the child directories can be created for a directory. If the key of this parameter is set to `false` (`0`), you can create only the files for a directory.
*	`permissions` specifies the UNIX file system permissions given to a child directory or a file.

<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>Only module and public directories can be changed using <code>config.xml</code>.</p></span>
  </div>

<p class="q">Reviewer: DirectoryList/Verification.php does not exist. Should this point instead to the DirectoryList class?</p>

To verify whether or not existing directories have read or write access, use the `createAndVerifyDirectories()` method of the <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/Filesystem/DirectoryList/Verification.php" target="_blank">Magento\Filesystem\DirectoryList\Verification</a> class.

<h2 id="mod-file-sys-dirs">Explore directories</h2>

<p class="q">Reviewer: First, some of these directories don't exist (e.g., pub/upload). Second, the file system is being reworked. Please provide either updated directory paths or advice as to whether to hide this information until after directory rework is complete.</p>

There are four types of directories in the Magento file system:

*	Primary directories

	Primary directories cannot be changed. They include: 
	
	*	Your Magento installation directory
	*	`[your Magento install dir]/app/code`
	*	`[your Magento install dir]/lib`
	
*	System directories

	System directories include:
	
	*	`[your Magento install dir]/var/di`
	*	`[your Magento install dir]/var/generation`
	*	`[your Magento install dir].app/etc`
	
	<p class="q">Reviewer: Magento\Framework\App\EntryPoint does not exist. Please clarify.</p>

	
	You can change the location of a system directory only when you use the <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/EntryPoint/EntryPoint.php" target="_blank">Magento\Framework\App\EntryPoint</a> class:
	
*	Application directories

	Application directories include:
	
	*	`[your Magento install dir]/app/code`
	*	`[your Magento install dir]/app/design`
	*	`[your Magento install dir]/var`
	*	`[your Magento install dir]/var/tmp`
	*	`[your Magento install dir]/var/cache`
	*	`[your Magento install dir]/var/log`
	*	`[your Magento install dir]/var/session`
	*	`sys_get_temp_dir()`
	
*	Public directories

	Public directories include:
	
	*	`[your Magento install dir]/pub`
	*	`[your Magento install dir]/pub/lib`
	*	`[your Magento install dir]/pub/media`
	*	`[your Magento install dir]/pub/upload`
	*	`[your Magento install dir]/pub/static`
	*	`[your Magento install dir]/pub/cache`

The location of the application and public directories can be changed the same way as the location of the system directory; that is, using `config.xml`.

<h2 id="mod-file-sys-diraccess">Access directories</h2>

This section discusses read and write access to directories.

<h3 id="mod-file-sys-diraccess-read">Get read access to directories</h3>

Use the <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/Directory/ReadInterface.php" target="_blank">Magento\Framework\Filesystem\Directory\ReadInterface</a> to get read access to directories.

The `DirectoryRead` interface facilitates reading directories and getting <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/File/ReadInterface.php" target="_blank">\Magento\Framework\Filesystem\File\ReadInterface</a> instances. 

You can perform the following actions:

<table>
	<tbody>
	<tr>
			<th>Method name</th>
			<th>Purpose</th>
		</tr>
	<tr>
		<td>getAbsolutePath()</td>
		<td>Gets the absolute path to a file.</td>
	</tr>
	<tr>
		<td>getRelativePath()</td>
		<td>Gets the relative path to a file.</td>
	</tr>
	<tr>
		<td>read()</td>
		<td>Gets the list of entities in the specified path.</td>
	</tr>
	<tr>
		<td>search()</td>
		<td>Searches for all entries for the specified pattern.</td>
	</tr>
	<tr>
		<td>isExist()</td>
		<td>Verifies whether or not a file or directory exists.</td>
	</tr>
	<tr>
		<td>stat()</td>
		<td>Gets statistics for the specified path.</td>
	</tr>
		<tr>
		<td>isReadable()</td>
		<td>Verifies whether or not a file or directory is readable.</td>
	</tr>
	<tr>
		<td>openFile()</td>
		<td>Opens a file read-only.</td>
	</tr>
		<tr>
		<td>readFile()</td>
		<td>Gets the contents of a file with the specified path.</td>
	</tr>
	<tr>
		<td>isFile()</td>
		<td>Verifies whether or not a file exists at the specified path.</td>
	</tr>
		<tr>
		<td>isDirectory()</td>
		<td>Verifies whether or not a directory exists at the specified path.</td>
	</tr>
	</tbody>
	</table>

<h3 id="mod-file-sys-diraccess-read">Get write access to directories</h3>

Use the <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/Directory/WriteInterface.php" target="_blank">\Magento\Framework\Filesystem\Directory\WriteInterface</a> to get write access to directories.

`Directory\WriteInterface` facilitates writing to directories and getting <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/File/WriteInterface.php" target="_blank">Magento\Framework\Filesystem\File\WriteInterface</a> instances. 

You can perform the following actions:

<table>
	<tbody>
	<tr>
			<th>Method name</th>
			<th>Purpose</th>
		</tr>
	<tr>
		<td>create()</td>
		<td>Creates a new directory.</td>
	</tr>
	<tr>
		<td>renameFile()</td>
		<td>Renames a file.</td>
	</tr>
	<tr>
		<td>copyFile()</td>
		<td>Copies a file. Use this method to move a file from one base directory to another. In this case you must specify the relative paths of both directories.</td>
	</tr>
	<tr>
		<td>delete()</td>
		<td>Deletes a file or directory with the specified path.</td>
	</tr>
	<tr>
		<td>changePermissions()</td>
		<td>Changes the UNIX file or directory permissions at the specified path.</td>
	</tr>
	<tr>
		<td>touch()</td>
		<td>Performs the UNIX <a href="http://linux.about.com/od/commands/l/blcmdl1_touch.htm" target="_blank">touch command</a> on the specified path.</td>
	</tr>
		<tr>
		<td>isWritable()</td>
		<td>Verifies whether or not a file or directory is writable.</td>
	</tr>
	<tr>
		<td>openFile()</td>
		<td>Opens a file read-write.</td>
	</tr>
		<tr>
		<td>writeFile()</td>
		<td>Writes content to a file.</td>
	</tr>
	
	</tbody>
</table>
	
<h2 id="mod-file-sys-files">Handle files</h2>

You can access read-only and read-write files using `openFile()` method of the <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/Directory/ReadInterface.php" target="_blank">\Magento\Framework\Filesystem\Directory\ReadInterface</a> or <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/Directory/WriteInterface.php" target="_blank">\Magento\Framework\Filesystem\Directory\WriteInterface</a>, respectively. 

Complementary interfaces: <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/File/ReadInterface.php" target="_blank">\Magento\Framework\Filesystem\File\ReadInterface</a> and <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/File/WriteInterface.php" target="_blank">\Magento\Framework\Filesystem\File\WriteInterface</a>.

<h2 id="mod-file-sys-drivers">Concepts: drivers</h2>

Both files and directories use _drivers_ to perform operations like creating, copying, and deleting files and directories.

Following is the list of drivers available in Magento 2:

*	<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/Driver/File.php" target="_blank">\Magento\Framework\Filesystem\Driver\File</a> for file system operations (reading, writing, creating, copying, deleting, and so on the files and directories).
*	<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/Driver/Http.php" target="_blank">\Magento\Framework\Filesystem\Driver\Http</a> and <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/Driver/Https.php" target="_blank">\Magento\Framework\Filesystem\Driver\Https</a> for HTTP and HTTPS operations, respectively.
*	<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/Driver/Zlib.php" target="_blank">\Magento\Framework\Filesystem\Driver\Zlib</a> for archiving.

Following is a sample module's `config.xml` that specifies two drivers.

<script src="https://gist.github.com/xcomSteveJohnson/41fda43194008c1717e4.js"></script>

<h2 id="mod-file-sys-wrap">Wrap operations</h2>

A _wrapper_ can be used as an optional parameter in the methods to create or read a file. If a specific wrapper is not specified, the wrapper, if any, specified in the directory configuration's `config.xml` is used.

You can apply stream wrappers to the operations using the file system. If you want to use the stream wrapper, you must register if. If a wrapper is not registered, an operation will be passed as a PHP native function call.

To register a wrapper:

<p class="q">Reviewer: \Magento\Framework\Filesystem\WrapperInterface doesn't exist. Please clarify.</p>

1.	Create a wrapper that implements <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/WrapperInterface.php" target="_blank">\Magento\Framework\Filesystem\WrapperInterface</a>.
<script src="https://gist.github.com/xcomSteveJohnson/ac0a88ea47bb7316865f.js"></script>

2.	Specify your wrapper in your configuration:
<script src="https://gist.github.com/xcomSteveJohnson/53b0f770e3be086c780c.js"></script>


#### Related topics:

