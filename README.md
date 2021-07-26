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

Much of the course work was out of date and there were some modules that have been deprecated. I ran into significant issues with local notifications, as the **scheduleNotificationAsync** method from the expo-notification package does not work with testing on the web and throws a breaking error. The code below is located from lines 26-34 in the App.js file and is commented out, but should work if tested on a phone (app must be in background mode and notification should trigger at the 30 second mark for testing purposes). If you wish to uncomment the lines and test on a device, please comment the code out again before running on the web. I set a standard alert to trigger about 10 seconds into opening the project as a placeholder. I worked very hard on this and ask for some leniency in grading regarding the notifications portion of the project. Thank you.   
    
        Notifications.scheduleNotificationAsync({
        content: {
            title: "Study Time",
            body: "Don't forget to study your flashcards!"
        },
        trigger: {
            seconds: 30
        }
        })