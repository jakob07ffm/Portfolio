import pygame

pygame.init()
win = pygame.display.set_mode((500, 500))
pygame.display.set_caption("MAZE Game")

player_x = 10
player_y = 10
width = 20
height = 20
ob1_x = 200
ob1_y = 360
goal_x = 470
goal_y = 470
ob1_width = 60
ob1_height = 20
vel = 20
border = 10
white = (255, 255, 255)
red = (229, 52, 11)
black = (0, 0, 0)

camera_x = 0
camera_y = 0

rects = [
    pygame.Rect(30, 10, 20, 460),
    pygame.Rect(30, 450, 460, 20)
]

run = True
while run:
    win.fill(white)
    pygame.time.delay(100)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            run = False

    keys = pygame.key.get_pressed()
    one_key_press = True

    if keys[pygame.K_a] and one_key_press != False and player_x > border:
        player_x -= vel
        one_key_press = False

    if keys[pygame.K_d] and one_key_press != False and player_x < 500 - width - border:
        player_x += vel
        one_key_press = False

    if keys[pygame.K_w] and one_key_press != False and player_y > 0 + border:
        player_y -= vel
        one_key_press = False

    if keys[pygame.K_s] and one_key_press != False and player_y < 500 - width - border:
        player_y += vel
        one_key_press = False

    # Update the camera position relative to the player
    camera_x = player_x - win.get_width() // 2
    camera_y = player_y - win.get_height() // 2

    # Check for collisions with each rectangle
    collision = False
    for r in rects:
        if r.colliderect(pygame.Rect(player_x, player_y, width, height)):
            collision = True
            break

    if collision:
        # If collision was detected, revert player's position
        if keys[pygame.K_a] and one_key_press != False and player_x + width > border:
            player_x += vel

        if keys[pygame.K_d] and player_x < 500 - border:
            player_x -= vel

        if keys[pygame.K_w] and player_y + height > border:
            player_y += vel

        if keys[pygame.K_s] and player_y < 500 - border:
            player_y -= vel

    if player_x == goal_x and player_y == goal_y:
        print("You did it!")

    # Draw the game elements with camera offset
    goal = pygame.draw.rect(win, (255, 255, 0), (goal_x - camera_x, goal_y - camera_y, width, height))
    player = pygame.draw.rect(win, (red), (player_x - camera_x, player_y - camera_y, width, height))

    pygame.draw.line(win, black, (0 - camera_x, 0 - camera_y), (0 - camera_x, 500 - camera_y), 20)
    pygame.draw.line(win, black, (0 - camera_x, 0 - camera_y), (500 - camera_x, 0 - camera_y), 20)
    pygame.draw.line(win, black, (500 - camera_x, 0 - camera_y), (500 - camera_x, 500 - camera_y), 20)
    pygame.draw.line(win, black, (0 - camera_x, 500 - camera_y), (500 - camera_x, 500 - camera_y), 20)

    for r in rects:
        pygame.draw.rect(win, black, (r.x - camera_x, r.y - camera_y, r.width, r.height))

    pygame.display.update()

pygame.quit()
