import pygame
import sys

def button_hover(mouse_pos, button_rect):
    if button_rect.collidepoint(mouse_pos):
        return True
    return False

def draw_button(button_color, button_rect, text, text_color):
    pygame.draw.rect(screen, button_color, button_rect)
    font = pygame.font.Font(None, 40)
    text_surface = font.render(text, True, text_color)
    text_rect = text_surface.get_rect(center=button_rect.center)
    screen.blit(text_surface, text_rect)

pygame.init()
width, height = 800, 600
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Button Example")

button_rect = pygame.Rect(300, 250, 200, 100)
button_color = (0, 255, 0)  # Green button
button_text = "Click Me"
text_color = (255, 255, 255)  # White text

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

        if event.type == pygame.MOUSEMOTION:
            mouse_pos = pygame.mouse.get_pos()
            if button_hover(mouse_pos, button_rect):
                button_color = (0, 200, 0)  # Lighter green when hovering
            else:
                button_color = (0, 255, 0)  # Green when not hovering

        if event.type == pygame.MOUSEBUTTONDOWN:
            mouse_pos = pygame.mouse.get_pos()
            if button_hover(mouse_pos, button_rect):
                print("Button clicked!")

    screen.fill((255, 255, 255))  # White background
    draw_button(button_color, button_rect, button_text, text_color)
    pygame.display.flip()
