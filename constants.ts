import { TutorialStep } from "./components/AppTutorial";
import { DriverStep } from "./components/DriverGuide";

export const driverSteps: DriverStep[] = [
  {
    id: 1,
    title: "Download App",
    description:
      "Get the Lagride Driver app from the App Store or Google Play and launch it.",
    image: "/driver-training-jpegs/download.jpg",
  },
  {
    id: 2,
    title: "Enter Phone Number",
    description: "Input your phone number to create or access your account.",
    image: "/driver-training-jpegs/driver-phone_interface.jpg",
  },
  {
    id: 3,
    title: "Verify Phone Number",
    description:
      "Enter the OTP sent to your phone to confirm your number. You are immediately told to join as a driver, click on 'Join Now' button to register.",
    image: "/driver-training-jpegs/reminder.jpg",
  },
  {
    id: 4,
    title: "Register as a Driver",
    description:
      "Click on the 'Start' button to fill the driver form. Complete your profile and submit the required biodata to sign up.",
    image: "/driver-training-jpegs/start.jpg",
  },
  {
    id: 5,
    title: "Get Verified",
    description:
      "Our team will review and verify your documents within 24-48 hours.",
    image: "/driver-training-jpegs/get_verified.jpg",
  },
  {
    id: 6,
    title: "Go Online",
    description:
      "Click on the 'Dispatch and Take Orders' button toggle your status to online to start receiving ride requests.",
    image: "/driver-training-jpegs/driver-go_online.jpg",
  },
  {
    id: 7,
    title: "Accept Ride Request",
    description:
      "Incoming ride requests are automatically accepted and brief trip details displayed. Review the pickup and drop-off locations before departing, or cancel the request if needed.",
    image: "/driver-training-jpegs/new_order.jpg",
  },
  {
    id: 8,
    title: "Navigate to Pickup",
    description:
      "Follow the in-app Map directions to reach the rider's pickup location.",
    image: "/driver-training-jpegs/driver-navigate_to_pickup.jpg",
  },
  {
    id: 9,
    title: "Confirm Arrival",
    description:
      "Swipe the big green button to notify the rider that you've arrived at the pickup spot.",
    image: "/driver-training-jpegs/show_arrival.jpg",
  },
  {
    id: 10,
    title: "Start Trip",
    description:
      "Swipe the 'Start Service' button and enter the four-digit ride PIN provided by the rider to begin the trip.",
    image: "/driver-training-jpegs/start_service.jpg",
  },
  {
    id: 11,
    title: "End Trip",
    description:
      "Swipe the 'End Service' button to end the trip once you've reached the rider's destination.",
    image: "/driver-training-jpegs/navigate_to_destination.jpg",
  },
  {
    id: 12,
    title: "Confirm Fare",
    description:
      "Review and confirm the final fare, adding any applicable toll or parking surcharges.",
    image: "/driver-training-jpegs/confirm_trip_fare.jpg",
  },
  {
    id: 13,
    title: "Go Offline or Back Online",
    description:
      "Upon the completion of the trip, you have an option of taking a break 'Stop Running' or going back online to receive a new order, 'Continue Taking Orders'.",
    image: "/driver-training-jpegs/choice.jpg",
  },
];

export const tutorialSteps: TutorialStep[] = [
  {
    id: 1,
    title: "Download & Sign Up",
    description:
      "Download the Lagride rider app from the App Store or Google Play. Create your account with just your phone number and email in under 2 minutes.",
    image:
      "https://images.unsplash.com/photo-1478779195278-4aa1d44121d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjByaWRlc2hhcmUlMjBib29raW5nfGVufDF8fHx8MTc3MjUyOTk4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    title: "Set Your Destination",
    description:
      "Enter your pickup location and destination. The app will show you the estimated fare, available car types, and arrival time instantly.",
    image:
      "https://images.unsplash.com/photo-1764347923709-fc48487f2486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbWFwJTIwbmF2aWdhdGlvbiUyMGdwc3xlbnwxfHx8fDE3NzI1Mjk5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    title: "Track Your Driver",
    description:
      "Watch your driver's location in real-time as they arrive. You'll receive notifications about your driver's ETA and vehicle details for easy identification.",
    image:
      "https://images.unsplash.com/photo-1696065244181-143cd8d15d87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcml2ZXIlMjBjYXIlMjBhcnJpdmFsJTIwcGlja3VwfGVufDF8fHx8MTc3MjUyOTk4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    title: "Enjoy the Ride",
    description:
      "Sit back and enjoy a comfortable ride. Track your route in real-time and share your trip status with friends and family for added safety.",
    image:
      "https://images.unsplash.com/photo-1758315427147-39bd97b36316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhc3NlbmdlciUyMHJpZGVzaGFyZSUyMGJhY2tzZWF0fGVufDF8fHx8MTc3MjUzMDM3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    title: "Pay Securely",
    description:
      "Complete your payment seamlessly using your preferred method - card, mobile wallet, or cash. Get instant receipts via email and rate your driver.",
    image:
      "https://images.unsplash.com/photo-1594025741613-c039c2c3bffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMHBheW1lbnQlMjB0cmFuc2FjdGlvbiUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzcyNTI5OTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export const links = {
  rider: {
    ios: "https://apps.apple.com/app/id6738812036",
    android:
      "https://play.google.com/store/apps/details?id=com.lagos.emobility.client",
  },
  driver: {
    ios: "https://apps.apple.com/app/id6738811985",
    android:
      "https://play.google.com/store/apps/details?id=com.lagos.emobility.driver",
  },
};
