# AI Text Summarization Agent

This project demonstrates an AI-powered text summarization agent using the Alith library and the Groq API with Llama 3.1 model.

## Features

- AI-powered text summarization using Llama 3.1 8B Instant model
- Concise summarization with compression ratio analysis
- Built with TypeScript for type safety
- Uses Groq API for fast inference

## Prerequisites

- Node.js 18+ (recommended for TypeScript compatibility)
- npm or yarn package manager
- A Groq API key (sign up at [https://console.groq.com](https://console.groq.com))

## Installation

1. **Clone or download this project**
   ```bash
   git clone <your-repo-url>
   cd alith_test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your API key**
   - Replace the API key in `agent_alith.ts` with your own Groq API key
   - Or set it as an environment variable (recommended for production)

## Project Structure

```
alith_test/
├── agent_alith.ts      # Main TypeScript file with AI agent code
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md          # This file
```

## Usage

⚠️ **Important**: You cannot run TypeScript files directly with Node.js (e.g., `node agent_alith.ts` won't work). TypeScript must be compiled to JavaScript first.

### ✅ Correct way to run the project:

```bash
npm start
```

This single command will:
1. Compile the TypeScript file to JavaScript
2. Run the compiled JavaScript file
3. Clean up the generated files automatically

### Alternative methods:

#### Option 2: Step-by-step execution
```bash
# Step 1: Compile TypeScript to JavaScript
npm run build

# Step 2: Run the compiled JavaScript
npm run execute

# Step 3: Clean up (optional)
npm run clean
```

#### Option 3: Manual compilation
```bash
# Compile TypeScript with proper settings
npx tsc agent_alith.ts --target ES2022 --module NodeNext --moduleResolution nodeNext --skipLibCheck --esModuleInterop

# Run the compiled JavaScript
node agent_alith.js
```

## Configuration

The AI agent is configured with:
- **Model**: `llama-3.1-8b-instant` (Groq)
- **API Endpoint**: `https://api.groq.com/openai/v1`
- **Task**: Text summarization expert
- **Output**: 2-3 sentence summaries focusing on key points

## Example Output

When you run the code, you'll see:

```
=== ORIGINAL TEXT ===
Length: 3513 characters

=== SUMMARY ===
Artificial Intelligence (AI) has transformed industries worldwide, from healthcare to business, through machine learning, deep learning, and neural networks. AI has shown remarkable promise in applications such as medical image analysis, personalized treatment plans, and automation, while also raising important questions about data privacy, algorithmic bias, and regulatory frameworks. As AI continues to evolve, it is expected to shape the future, addressing global challenges like climate change, poverty, and disease through breakthroughs in quantum computing and other emerging technologies.

Summary Length: 697 characters
Compression Ratio: 20%
```

## Customization

You can modify the agent behavior by:

1. **Changing the model**: Update the `model` parameter in the Agent constructor
2. **Adjusting the preamble**: Modify the system prompt to change summarization style
3. **Processing different text**: Replace the `longText` variable with your own content
4. **Adding more features**: Extend the agent with additional prompts or processing

## Available Scripts

- `npm start` - Compile and run the TypeScript file
- `npm run build` - Compile TypeScript to JavaScript
- `npm run execute` - Run the compiled JavaScript file

## Troubleshooting

### TypeScript/Node.js Compatibility Issues

If you encounter "Unknown file extension .ts" errors:

1. Ensure you're using Node.js 18+ 
2. The project is configured with ES modules (`"type": "module"` in package.json)
3. Use the provided build script instead of running TypeScript directly

### API Key Issues

- Verify your Groq API key is valid
- Check your Groq account has sufficient credits
- Ensure the API key has the correct permissions

### Module Resolution Issues

The project uses `NodeNext` module resolution for compatibility with the Alith library. If you encounter import errors:

1. Ensure all dependencies are installed: `npm install`
2. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
3. Check that TypeScript is targeting ES2022 or higher

## Dependencies

- **alith**: AI agent framework
- **typescript**: TypeScript compiler
- **ts-node**: TypeScript execution environment

## API Reference

For more information about the Alith library and its capabilities, visit the official documentation.

## License

This project is open source and available under the MIT License.