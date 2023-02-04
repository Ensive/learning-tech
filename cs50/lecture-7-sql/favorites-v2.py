import csv

titles = {}

with open("favorites.csv", "r") as file:
    reader = csv.DictReader(file)
    movies_count = 0
    # counts = dict()
    genres = {}
    counts = {}
    for row in reader:
        movie_title = row['title']
        movie_genres = row['genres']
        if not movie_title in titles:
            titles[movie_title] = 0
        titles[movie_title] += 1

        movies_count += 1
        # print(movie_genres)

for title in sorted(titles):
    print(title, titles[title])

print(movies_count)
print(f"Total movies: moviesCount")
