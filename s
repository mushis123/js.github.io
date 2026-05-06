body {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
}

h1 {
  text-align: center;
  color: #333;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
}

.card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-bottom: 12px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 15px;
  cursor: pointer;
}

.card-header:hover {
  background-color: #f0f0f0;
}

.num {
  background: #e8f0fe;
  color: #1a56db;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: bold;
}

.card-title {
  flex: 1;
  font-size: 0.95rem;
  color: #333;
}

.toggle-icon {
  color: #999;
  font-size: 0.8rem;
}

.card-body {
  display: none;
  padding: 15px;
  flex-direction: column;
  gap: 10px;
  border-top: 1px solid #ddd;
}

.card.open .card-body {
  display: flex;
}

.code-block {
  background: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 12px;
  font-family: monospace;
  font-size: 0.85rem;
  white-space: pre;
  overflow-x: auto;
  line-height: 1.6;
}

.result-label {
  font-size: 0.8rem;
  color: #666;
  font-weight: bold;
}

.result-box {
  background: #f0fff0;
  border: 1px solid #b2dfb2;
  border-radius: 4px;
  padding: 8px 12px;
  font-family: monospace;
  font-size: 0.85rem;
  color: #2e7d32;
}
