# PowerShell script to translate README.md in current directory
# Usage: .\translate-readme.ps1

param(
    [string]$Directory = "."
)

$readmePath = Join-Path $Directory "README.md"

if (-not (Test-Path $readmePath)) {
    Write-Error "README.md not found in directory: $Directory"
    exit 1
}

Write-Host "Found README.md in: $Directory"
Write-Host "Starting translation process..."

# Create a temporary instruction file for Cursor
$instruction = @"
Please translate the README.md file in the current directory from Vietnamese to English and Japanese:

1. Read README.md in current directory: $Directory
2. Create README.en.md with English translation
3. Create README.ja.md with Japanese translation
4. Add language navigation to all files: [English](README.en.md) - [日本語](README.ja.md) - [Tiếng Việt](README.md)
5. Maintain exact formatting and structure
6. Update relative links to appropriate language versions

Directory: $Directory
"@

Write-Host $instruction
Write-Host "`nCopy the above instruction to Cursor IDE to execute the translation."
