import random

user_wins = 0
comp_wins = 0
options = ["schere", "stein", "papier"]

while True:
    user_imput = input("Schreibe entweder Stein, Schere, Papier oder Q zum Verlassen: ").lower()
    if user_imput == "q":
        break

    if user_imput not in options:
        continue

    random_number = random.randint(0, 2)   # stein = 0, Papier = 1 stein=2
    comp_pick = options[random_number]
    print("Der Computer hat", comp_pick,"gewählt.")

    if user_imput == "stein" and comp_pick == "schere":
        print("Du hat gewonnen!")
        user_wins += 1
    elif user_imput == "papier" and comp_pick == "stein":
        print("Du hat gewonnen!")
        user_wins += 1
    elif user_imput == "schere" and comp_pick == "papier":
        print("Du hat gewonnen!")
        user_wins += 1
    elif user_imput == comp_pick:
        print("Unentschieden!")
        continue

    else:
        print("Du hast verloren!")
        comp_wins += 1
print("Du hast", user_wins, "gewonnen!")
print("Der Computer hat", comp_wins, "gewonnen!")
print("Tschüs!")