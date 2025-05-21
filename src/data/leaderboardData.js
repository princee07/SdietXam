import React from 'react';
import { 
  FaGraduationCap, FaLaptopCode, FaBriefcase 
} from "react-icons/fa";

export const leaderboardData = {
  btech: [
    { rank: 1, name: "Raj Kumar", score: 980, course: "Computer Science", year: "4th", badges: 8, streak: 42 },
    { rank: 2, name: "Priya Singh", score: 945, course: "Electronics", year: "3rd", badges: 7, streak: 38 },
    { rank: 3, name: "Aditya Sharma", score: 920, course: "Mechanical", year: "4th", badges: 6, streak: 35 },
    { rank: 4, name: "Neha Gupta", score: 905, course: "Civil", year: "2nd", badges: 6, streak: 31 },
    { rank: 5, name: "Vivek Patel", score: 890, course: "Computer Science", year: "3rd", badges: 5, streak: 28 },
    { rank: 6, name: "Sonia Khan", score: 875, course: "Electronics", year: "4th", badges: 5, streak: 26 },
    { rank: 7, name: "Rahul Verma", score: 860, course: "Mechanical", year: "2nd", badges: 4, streak: 24 },
    { rank: 8, name: "Ananya Joshi", score: 850, course: "Civil", year: "3rd", badges: 4, streak: 22 },
    { rank: 9, name: "Karan Mehta", score: 835, course: "Computer Science", year: "2nd", badges: 3, streak: 19 },
    { rank: 10, name: "Divya Sharma", score: 820, course: "Electronics", year: "4th", badges: 3, streak: 17 },
  ],
  bca: [
    { rank: 1, name: "Amit Kumar", score: 950, semester: "6th", specialization: "Web Development", badges: 9, streak: 40 },
    { rank: 2, name: "Sneha Patel", score: 925, semester: "5th", specialization: "Data Science", badges: 8, streak: 37 },
    { rank: 3, name: "Rohan Singh", score: 900, semester: "6th", specialization: "Cybersecurity", badges: 7, streak: 33 },
    { rank: 4, name: "Pooja Verma", score: 880, semester: "4th", specialization: "Mobile Apps", badges: 6, streak: 29 },
    { rank: 5, name: "Vikram Joshi", score: 865, semester: "5th", specialization: "Web Development", badges: 5, streak: 25 },
    { rank: 6, name: "Nisha Gupta", score: 845, semester: "6th", specialization: "Data Science", badges: 5, streak: 23 },
    { rank: 7, name: "Suresh Kumar", score: 830, semester: "4th", specialization: "Cybersecurity", badges: 4, streak: 21 },
    { rank: 8, name: "Anjali Sharma", score: 815, semester: "5th", specialization: "Mobile Apps", badges: 4, streak: 18 },
    { rank: 9, name: "Deepak Yadav", score: 800, semester: "6th", specialization: "Web Development", badges: 3, streak: 16 },
    { rank: 10, name: "Kavita Singh", score: 785, semester: "4th", specialization: "Data Science", badges: 3, streak: 14 },
  ],
  bba: [
    { rank: 1, name: "Manish Sharma", score: 940, semester: "6th", specialization: "Marketing", badges: 8, streak: 39 },
    { rank: 2, name: "Anjali Patel", score: 915, semester: "5th", specialization: "Finance", badges: 7, streak: 34 },
    { rank: 3, name: "Sanjay Mehta", score: 890, semester: "6th", specialization: "Human Resources", badges: 7, streak: 32 },
    { rank: 4, name: "Ritu Agarwal", score: 875, semester: "4th", specialization: "Marketing", badges: 6, streak: 28 },
    { rank: 5, name: "Manoj Kumar", score: 855, semester: "5th", specialization: "Finance", badges: 5, streak: 25 },
    { rank: 6, name: "Preeti Singh", score: 840, semester: "6th", specialization: "Human Resources", badges: 5, streak: 22 },
    { rank: 7, name: "Rakesh Verma", score: 825, semester: "4th", specialization: "Marketing", badges: 4, streak: 20 },
    { rank: 8, name: "Meena Gupta", score: 810, semester: "5th", specialization: "Finance", badges: 4, streak: 17 },
    { rank: 9, name: "Vijay Sharma", score: 795, semester: "6th", specialization: "Human Resources", badges: 3, streak: 15 },
    { rank: 10, name: "Sunita Jain", score: 780, semester: "4th", specialization: "Marketing", badges: 3, streak: 13 },
  ],
};

export const programLabels = {
  btech: { 
    icon: FaGraduationCap, 
    label: "BTech", 
    color: "blue" 
  },
  bca: { 
    icon: FaLaptopCode, 
    label: "BCA", 
    color: "purple" 
  },
  bba: { 
    icon: FaBriefcase, 
    label: "BBA", 
    color: "green" 
  },
};