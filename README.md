# Udacity React Native Mobile Flashcards project

This was final project for the React Nano Degree coursework.

----------------------------------------------------------------
## Installation

- This application was built using the Expo-CLI
- Use ```yarn install``` to install all dependencies.
- The application should statr with ```yarn start```


----------------------------------------------------------------
## Development and Testing

This application was built with Android in mind, but was tested in the expo simulators on the Web and in Expo Go. I am using a chromebook, developing in the Linux container. I could not connect my phone properly without enabling ADB debugging, and I did not feel comfortable with security risks involved. Google notes in the settings **Note that this action allows installation of Android apps that haven't been verified by Google, and requires a factory reset to disable.** 


----------------------------------------------------------------
## Citations
- Udacity course materials, peer, and mentor assistance with questions.
- Documentation for React Native, React Navigator, and Expo
- Stack Overflow and Medium for on-line code references
- Academind's video series on React Native (Instructor: Maxamillian Schwarzmuller)


----------------------------------------------------------------
## Notes
I used functional components and took advantage of hooks in this project.

Much of the course work was out of date and there were some modules that have been deprecated. I ran into significant issues with local notifications, as the **scheduleNotificationAsync** (below) method from the expo-notification package does not work with testing on the web and throws a breaking error. **If you go to the settings tab**, there is a button to manually trigger the notification. It should work if tested on a phone (app must be in background mode and notification should trigger at the 30 second mark for testing purposes). Do not use the button if testing on a web browser as it will cause an error. I worked very hard on this and ask for some leniency in grading regarding the notifications portion of the project. Thank you.   
    
        Notifications.scheduleNotificationAsync({
        content: {
            title: "Study Time",
            body: "Don't forget to study your flashcards!"
        },
        trigger: {
            seconds: 30
        }
        })