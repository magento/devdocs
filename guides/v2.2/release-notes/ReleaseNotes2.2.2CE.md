---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento Open Source 2.2.2 Release Notes
menu_title: Magento Open Source 2.2.2 Release Notes
menu_order: 280
level3_menu_node:
level3_subgroup:
version: 2.2
github_link: release-notes/ReleaseNotes2.2.2CE.md
---
*Patch code and release notes published on , 2017.* 


We are pleased to present Magento Open Source 2.2.2. This release includes numerous functional fixes and enhancements.


## Highlights

Look for the following highlights in this release:


* Twenty-two community-submitted bug fixes and multiple pull requests.




Looking for more information on these new features as well as many others? Check out  [Magento 2.2 Developer Documentation](http://devdocs.magento.com/guides/v2.2/).


## Fixed issues

## Fixed issues
83552
83540
83540
83498
83495
83494
83489
83477
83476
83413
83410
83407
83402
83401
83399
83373
83329
83322
83312
83310
83290
83287
83286
83283
83281
83279
83278
83277
83272
83271
83270

83257
83252
83197
83194
83174
83169
83152
83147
83145
83143
83130
83120
83113
83095
83494
83489
83477
83476
83413
83110
83407
83402
83401
83399
83373
83329
83322
83312
83310
83290
83287
83286
83283
83281
83279
83278
83277
83272
83271
83270
83257
83252
83247
83197
83194
83174
83169
83152
83147
83145
83143
83130
83120
83113
83095
83085
83084
83066
83036
83033
83030
83026
83024
83023
83013
83005
82999


82978
82976
82972
82957
82956
82955
82954
82953
82950
82949
82946
82945
82944
82941
82904
82889
82887
82886
82883
82874
82865
82856
82854
82851
82818
82814
82810
82809
82787
82758
82755
82754
82753
82748
82747
82733
82732
82724
82710
82707
82675
82668
82666
82665
82658
82652
82651
82645
82637
82635
82464
82635
82634
82596
82595
82577
82562
82537
82536
82535
82504
82486
82464
82463
82444
82436
82431
82426
82394
82388
82385
82367
82339
82338
82314
82313
82308
82306
82300
82292

82273
82236
82223
82192
82179
82177
82119
82117
82109

82082
82061
82058
82057
82052
82006
82004
82003
82001
81995
81994
81993
81990
81989
81986
81977
81973
81971
81970
81967
81959
81942
81916
81904

81473
81445
81395
81307

81082
80908

80738
80609
80517
80350
80209
80207
80205
80203
80199
80191
80188
77767
77742

75725
75719
73852
73696
73473
73275
72865
72809
72597
72352
72301
72090
71966
71662
71459
71458
71393
71087
70726

70323
70131
69924
69634

69032
67134

83600

83627

83668
83670

83686
83688
83726

83741
83745
83754

83780
83783
83784
83785
83815
83844

81841





### Installation, upgrade, deployment

<!--- 80225 -->* We’ve improved the message that Magento displays during upgrade if any schema or data version in the `setup_modules` database is higher than the current module version in the code. *Fix submitted by community member <a href="https://github.com/schmengler" target="_blank">Fabian Schmengler </a> in pull request <a href="https://github.com/magento/magento2/pull/11064" target="_blank">11064</a>.*


<!--- 80201 -->*  [GitHub-10601](https://github.com/magento/magento2/issues/10601)

### Catalog



### Configurable products




### Frameworks




### General



### Indexing

  

### Orders




### Payment methods







### Search



### Sitemap


<!--- NOT NEEDED  83834 83815 83783 83755 83740 83682 83672 83632 83621 83600 83572 52974 62981 69497 70725 76052 72138 81987 81901 81886 81830  
82754 82814 82854 82367 82444 82535 82577 81990 82001 82058 82109 82177 82192 82300 80738 80908 81445 81306 81113 80781 80342 82288 82283 82234 82102 82069 82003 82552  
82748 82707 83013 82991 82979 82978 82976 82952 82943 83261 83247 83171 83135 83132 83130 83129 83128 83035 83026 83490 83461 83428 83310 83285 83563
83551 83547 83529 83537 83503 83479 .83532-->*  

<!--- WONT FIX  69032 83275--> 

<!--- DUPLICATE  82655--> 

<!--- CANNOT REPRODUCE  82309--> 

<!--- CANCELED  80190 80189--> 

## Community contributions
We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.




### System requirements
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}install-gde/system-requirements-tech.html)



For more information, [System Requirements]({{ site.baseurl }}magento-system-requirements.html).

### Installation and upgrade instructions

You can install Magento Open Source 2.2 General Availability (GA) using Composer.


{% include install/releasenotes/ce_install_21.md %}

## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
