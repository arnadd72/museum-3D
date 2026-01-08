from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Server Backend Berjalan!"

@app.route('/api/data')
def get_data():
    return jsonify({"message": "Halo dari Flask", "status": "connected"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)