function renderLicenseBadge(license) {
  if (!license || license === "None") return "";
  return `![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (!license || license === "None") return "";
  return `- [License](#license)`;
}

function renderLicenseSection(license) {
  if (!license || license === "None") return "";
  return `## License\nThis project is licensed under the ${license} license.`;
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out!
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
  `;
}

export default generateMarkdown;
