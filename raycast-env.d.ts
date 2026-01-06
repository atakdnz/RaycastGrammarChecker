/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** AI Provider - Select the AI provider to use. */
  "provider": "openai" | "anthropic" | "gemini" | "openrouter" | "ollama" | "groq",
  /** Check Style - Select the style of checking. */
  "checkStyle": "casual" | "professional" | "academic" | "creative",
  /** OpenAI API Key - API Key for OpenAI */
  "openaiApiKey"?: string,
  /** OpenAI Model - Model for OpenAI (e.g., gpt-4o, gpt-4o-mini) */
  "openaiModel": string,
  /** Anthropic API Key - API Key for Anthropic */
  "anthropicApiKey"?: string,
  /** Anthropic Model - Model for Anthropic (e.g., claude-3-5-sonnet-latest) */
  "anthropicModel": string,
  /** Gemini API Key - API Key for Google Gemini */
  "geminiApiKey"?: string,
  /** Gemini Model - Model for Gemini (e.g., gemini-1.5-flash, gemini-2.0-flash-exp) */
  "geminiModel": string,
  /** OpenRouter API Key - API Key for OpenRouter */
  "openRouterApiKey"?: string,
  /** OpenRouter Model - Model for OpenRouter (e.g., openai/gpt-4o) */
  "openRouterModel": string,
  /** Groq API Key - API Key for Groq */
  "groqApiKey"?: string,
  /** Groq Model - Model for Groq (e.g., llama-3.3-70b-versatile) */
  "groqModel": string,
  /** Ollama Base URL - Base URL for Ollama (default: http://localhost:11434) */
  "ollamaBaseUrl": string,
  /** Ollama Model - Model for Ollama (e.g., llama3, mistral) */
  "ollamaModel": string,
  /** Auto-fill - Automatically fill form commands with clipboard content. */
  "autoUseClipboard": boolean
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `check-grammar` command */
  export type CheckGrammar = ExtensionPreferences & {}
  /** Preferences accessible in the `quick-check` command */
  export type QuickCheck = ExtensionPreferences & {}
  /** Preferences accessible in the `view-history` command */
  export type ViewHistory = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `check-grammar` command */
  export type CheckGrammar = {}
  /** Arguments passed to the `quick-check` command */
  export type QuickCheck = {}
  /** Arguments passed to the `view-history` command */
  export type ViewHistory = {}
}

