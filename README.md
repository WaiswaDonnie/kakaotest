# kakao
# Simple Login with kakao auth
# Intallation setup.
- Navigate to the folder where you want to download the project.
- Open git bash in the same folder and paste this link === "git clone https://github.com/WaiswaDonnie/kakao.git" and wait till the cloning process in done.
- In the same terminal directory, navigate to the folder "kakao" using "cd kakao" on windows.
- Run "npm i" to install the node modules and wait till process is done.
- Build the project using "ionic build"
- And build the apk using "ionic cordova build android"
- Emulate the apk using "ionic cordova emulate android"(Make sure you installed the Emulators using android studio)

# Checking for the Login
Ignore the input fields of the login page and press the login button(LOGIN WITH KAKAO).

# Configuring the app sdk
- Open android studio and import a new project
- In the directory, navigate to platforms\android in the root of your project.
- Click ok and wait for the project to be imported succesful.
- Build a signed apk using android studio.
# How to build a signed apk with android studio
- In the menu bar, seleck build->Generate signed bundle or APK
- In the popup, choose APK and click Next
- In the keystore path, navigate to the directory of the key
- Key store password is kakao2020
- Key alias name is kakao
- Key password is kakao2020 and click Next
- Choose release, make sure both check boxes are ticked and then click finish


