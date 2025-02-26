import pandas as pd
import json

# Load the dataset
df = pd.read_csv("recipes.csv")

# Clean column names
df.columns = df.columns.str.strip()

# Function to extract country from cuisine_path
def extract_country(cuisine_path):
    if pd.isna(cuisine_path):
        return "Unknown"  # If no cuisine_path is given
    parts = cuisine_path.split(" > ")
    return parts[-1]  # Get the last part (country name)

# Apply function to create a 'country' column
df['country'] = df['cuisine_path'].apply(extract_country)

# Create a dictionary to store recipes by country
recipes_by_country = {}

# Process the dataset
for _, row in df.iterrows():
    country = row['country']
    recipe = {
        "name": row["recipe_name"],
        "description": f"A delicious {country} dish.",
        "ingredients": row["ingredients"].split(", "),
        "steps": row["directions"].split(". "),
        "tutorial": row["url"] if pd.notna(row["url"]) else "No tutorial available",
        "image": row["img_src"] if pd.notna(row["img_src"]) else "No image available"
    }

    if country not in recipes_by_country:
        recipes_by_country[country] = []

    recipes_by_country[country].append(recipe)

# Save to a JSON file
with open("recipes.json", "w", encoding="utf-8") as json_file:
    json.dump(recipes_by_country, json_file, indent=4)

print("Recipes JSON file has been created successfully!")
