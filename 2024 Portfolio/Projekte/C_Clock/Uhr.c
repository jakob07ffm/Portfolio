#include <stdio.h>
#include <time.h>

int main() {
    time_t jetzt = time(NULL);
    struct tm * Zeit = localtime(&jetzt);

    printf("seconds: %d\n", Zeit->tm_sec);
    printf("minutes: %d\n", Zeit->tm_min);
    printf("hours: %d\n", Zeit->tm_hour); 
    return 0;
}
