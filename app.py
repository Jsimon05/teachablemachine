from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/chargers')
def products():
    return render_template("chargers.html")

@app.route('/romero')
def contact():
    return render_template("romero.html")

@app.route('/about')
def about():
    return render_template("about.html")

if __name__ == '__main__':
    app.run(debug=True)
