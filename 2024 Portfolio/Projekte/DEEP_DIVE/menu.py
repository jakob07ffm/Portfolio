import pygame

pygame.init()

width, height = 800, 600
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Game Menu")

# Define button properties
button_rect = pygame.Rect(300, 250, 200, 100)
text_color = (255, 255, 255)
button_font = pygame.font.Font(None, 40)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
        if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
            if button_rect.collidepoint(event.pos):
                print("Starting the game!")

    screen.fill((255, 255, 255))  # Clear the screen

    pygame.draw.rect(screen, (50, 50, 50), button_rect)  # Draw the button

    button_text = button_font.render("Start Game", True, text_color)
    text_rect = button_text.get_rect(center=button_rect.center)
    screen.blit(button_text, text_rect)  # Display the button text

    pygame.display.flip()
