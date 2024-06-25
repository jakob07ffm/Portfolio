import random

top_of_range = input("Schreibe eine Nummer ein: ")

if top_of_range.isdigit():
    top_of_rang = int(top_of_range)

    if top_of_rang <= 0:
        print("Bitte tippe eine Nummer höher als 0 ein und versuche es erneut.")
        quit()
else:
    print("Bitte schreibe nächstes Mal eine Nummer.")
    quit()

random_number = random.randint(1, top_of_rang)
guesses = 0

while True:
    guesses += 1
    user_guess = input("Rate was die zufallige Nummer ist! ")

    if user_guess.isdigit():
        user_guess = int(user_guess)
    else:
        print("Bitte schreibe nächstes Mal eine Nummer.")
        continue
    if user_guess == random_number:
        print("Richtige Nummer!")
        break
    elif user_guess > random_number:
        print("Du bist über der zufälligen Zahl!")
    else: 
        print("Du bist unter der zufälligen Zahl!")

print("Du hast es in", guesses, "Versuch(en) geschafft!")
