#!/bin/bash

# Comprobación de mensaje
if [ -z "$1" ]; then
  echo "❌ Usa: ./commit.sh \"mensaje\""
  exit 1
fi

echo "📦 Añadiendo cambios..."
git add .

echo "📝 Commit..."
git commit -m "$1"

echo "🚀 Subiendo a GitHub..."
git push

echo "✅ Hecho"
