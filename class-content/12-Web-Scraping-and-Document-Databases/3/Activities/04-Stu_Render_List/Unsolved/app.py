# import necessary libraries
from flask import Flask, render_template

# @TODO: Initialize your Flask app here
# CODE GOES HERE
app = Flask(__name__)

# @TODO:  Create a route and view function that takes in a list of strings and renders index.html template
# CODE GOES HERE
@app.route("/")
def index():
        fav_movies = ["Wolf of Wallstreet", "Yes Man", "Avengers", "Focus"]
        return render_template("index.html", list=fav_movies)

if __name__ == "__main__":
    app.run(debug=True)
