import os
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS

# Arahkan ke folder hasil build React
app = Flask(__name__, static_folder='frontend/dist', static_url_path='')
CORS(app)

@app.route('/')
def serve_frontend():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/data')
def get_data():
    return jsonify([
        {"id": 1, "name": "Mahkota Raja", "category": "Numismatik", "desc": "Emas murni era Majapahit", "model": "/models/crown_placeholder.glb"},
        {"id": 2, "name": "Kujang", "category": "Senjata", "desc": "Pusaka Prabu Siliwangi", "model": "/models/kujang_placeholder.glb"}
    ])

@app.errorhandler(404)
def not_found(e):
    if os.path.exists(os.path.join(app.static_folder, 'index.html')):
        return send_from_directory(app.static_folder, 'index.html')
    return jsonify({"error": "Resource not found"}), 404

if __name__ == '__main__':
    app.run(debug=True, port=5000)