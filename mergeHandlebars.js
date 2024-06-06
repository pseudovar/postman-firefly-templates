const fs = require('fs')
const path = require('path')

// Function to read files from a directory and concatenate them
function concatenateTemplates(
    mainTemplatePath,
    partialsDirectory,
    outputFilePath
) {
    let mergedContent = ''

    // Read partials and concatenate their content
    const filenames = fs.readdirSync(partialsDirectory)
    filenames.forEach((filename) => {
        const matches = /^([^.]+).handlebars$/.exec(filename)
        if (!matches) {
            return
        }
        const name = matches[1]
        const filepath = path.join(partialsDirectory, filename)
        const template = fs.readFileSync(filepath, 'utf8')
        mergedContent += `{{#*inline "${name}"}}\n${template}\n{{/inline}}\n`
    })

    // Read the main template and concatenate its content
    const mainTemplateContent = fs.readFileSync(mainTemplatePath, 'utf8')
    mergedContent += mainTemplateContent

    // Write the merged content to the output file
    fs.writeFileSync(outputFilePath, mergedContent)
}

// Directory paths
const srcDirectory = path.join(__dirname, 'src')
const partialsDirectory = path.join(srcDirectory, 'partials')
const outputDirectory = path.join(__dirname, 'dist')

// Ensure the output directory exists
if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory)
}

// Read all .handlebars files in the src directory (excluding subfolders)
const templates = fs
    .readdirSync(srcDirectory)
    .filter(
        (file) =>
            file.endsWith('.handlebars') &&
            !fs.lstatSync(path.join(srcDirectory, file)).isDirectory()
    )

// Process each template
templates.forEach((template) => {
    const mainTemplatePath = path.join(srcDirectory, template)
    const outputFilePath = path.join(outputDirectory, template)
    concatenateTemplates(mainTemplatePath, partialsDirectory, outputFilePath)
})

console.log('Templates merged successfully.')
