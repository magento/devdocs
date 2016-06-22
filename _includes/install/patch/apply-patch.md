<div markdown="1">

To apply a patch:

1.	Copy the patch file to your Magento installation directory.
2.	As the Magento file system owner, use one of the following commands to extract it:

<table>
<tbody>
<tr> 
	<th>Patch file format</th>
	<th>Command to extract</th>
</tr>
<tr><td><code>.zip</code></td>
	<td><code>unzip -o &lt;patch name>.zip</code></td>
</tr>
<tr><td><code>.tar.gz</code></td>
	<td><code>tar -zxf &lt;patch name>.zip</code></td>
</tr>
<tr><td><code>.tar.bz2</code></td>
	<td><code>tar -jxf &lt;patch name>.zip</code></td>
</tr>
</tbody>
</table>

<div class="bs-callout bs-callout-info" id="info">
  	<p>If you don't have command line access to your Magento server, extract the patch locally and transfer the files to the server using an FTP application.</p>   
</div>
