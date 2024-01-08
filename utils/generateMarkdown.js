// This function returns a license badge based on which license is passed in.
// If there is no license, return an empty string.
function renderLicenseBadge(license) {
  const licenseBadgeArr = [
  ['Apache License 2.0','[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'],
  ['GNU General Public License v3.0','[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'],
  ['MIT License','[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'],
  ['BSD 2-Clause "Simplified" License','[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]'],
  ['BSD 3-Clause "New" or "Revised" License','[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]'],
  ['Boost Software License 1.0','[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]'],
  ['Creative Commons Zero v1.0 Universal','[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]'],
  ['GNU Affero General Public License v3.0','[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]'],
  ['Mozilla Public License 2.0','[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'],
  ['The Unlicense','[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]']
  ];
console.log(license);
 
  for (let i = 0; i < licenseBadgeArr.length; i++){
    if (licenseBadgeArr[i][0] == license) {
      console.log ("return link "+licenseBadgeArr[i][1]);
      return licenseBadgeArr[i][1];
    }
  }
    return('');

}

// This function returns the license link.
// If there is no license, return an empty string.
function renderLicenseLink(license) {
  const licenseLinkArr = [
    ['Apache License 2.0','(https://opensource.org/licenses/Apache-2.0)'],
    ['GNU General Public License v3.0','(https://www.gnu.org/licenses/gpl-3.0)'],
    ['MIT License','(https://opensource.org/licenses/MIT)'],
    ['BSD 2-Clause "Simplified" License','(https://opensource.org/licenses/BSD-2-Clause)'],
    ['BSD 3-Clause "New" or "Revised" License','(https://opensource.org/licenses/BSD-3-Clause)'],
    ['Boost Software License 1.0','(https://www.boost.org/LICENSE_1_0.txt)'],
    ['Creative Commons Zero v1.0 Universal','(http://creativecommons.org/publicdomain/zero/1.0/)'],
    ['GNU Affero General Public License v3.0','(https://www.gnu.org/licenses/agpl-3.0)'],
    ['Mozilla Public License 2.0','(https://opensource.org/licenses/MPL-2.0)'],
    ['The Unlicense','(http://unlicense.org/)']
  ];  
console.log(license);
for (let i = 0; i < licenseLinkArr.length; i++){
  if (licenseLinkArr[i][0] == license) {
    console.log ("return link "+licenseLinkArr[i][1]);
    return licenseLinkArr[i][1];
  }
}
  return('');
}

// This function returns the license section of README.
// If there is no license, return an empty string.
function renderLicenseSection(license) {
  if (license == undefined) {
    return "";
  } else {
     return license;
  }
}

// Generate markdown for README file title.
function generateMarkdown(data) {
  return `# ${data.title}`;
}

module.exports = { generateMarkdown, renderLicenseSection, renderLicenseLink, renderLicenseBadge };
