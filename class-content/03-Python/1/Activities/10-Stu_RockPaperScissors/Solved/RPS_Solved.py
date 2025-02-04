# Rock-paper-scissors-lizard-Spock template


# The key idea of this program is to equate the strings
# "rock", "paper", "scissors", "lizard", "Spock" to numbers
# as follows:
#
# 0 - rock
# 1 - Spock
# 2 - paper
# 3 - lizard
# 4 - scissors

# helper functions
import random
def name_to_number(name):
    if name == 'paper':
        return 2
    elif name == 'rock':
        return 0
    elif name == 'scissors':
        return 4
    elif name == 'Spock':
        return 1
    elif name == 'lizard':
        return 3
    else:
        return "not a valid choice"
    


def number_to_name(number):
    if number == 0:
        return 'rock'
    elif number == 1:
        return 'Spock'
    elif number == 2:
        return 'paper'
    elif number == 3:
        return 'lizard'
    elif number == 4:
        return 'scissors'
    else:
        return " inavlid choice "
    

def rpsls(player_number): 
    
    # print a blank line to separate consecutive games
    print ("")
    
    
    # print out the message for the player's choice
    print ("player chooses", player_number)

    # convert the player's choice to player_number using the function name_to_number()
    player_number = name_to_number(player_number)
    #player_number = player_choice
    
    # compute random guess for comp_number using random.randrange()
    comp_number = random.randrange(0,5)

    # convert comp_number to comp_choice using the function number_to_name()
    comp_number = number_to_name(comp_number)
    
    # print out the message for computer's choice
    print ("computer chooses", comp_number)

    # compute difference of comp_number and player_number modulo five
    #player_number = name_to_number(player_number)
    comp_number = name_to_number(comp_number)
    x = (comp_number - player_number) % 5

    # use if/elif/else to determine winner, print winner message
    if x ==   1:
        print ("computer wins")
        
    elif x == 2:
        print ("computer wins")
        
    elif x == 3:
        print ("player wins")
        
    elif x == 4:
        print ("player wins")
    else:
        print ("Player and computer tie!")
        # Rock-paper-scissors-lizard-Spock template



        # test your code - LEAVE THESE CALLS IN YOUR SUBMITTED CODE
rpsls(input("Enter you choice"))
rpsls("Spock")
rpsls("paper")
rpsls("lizard")
rpsls("scissors")