
import React from 'react';
import { Lightbulb, Code, BrainCircuit, Music } from 'lucide-react';
import { EventDetail, Coordinator, ImportantDate } from './types';

export const SYMPOSIUM_NAME = "SYNERGIA '26";
export const TAGLINE = "HORIZON";
export const COLLEGE_NAME = "Velalar College of Engineering and Technology";
export const DEPARTMENT = "Department of Computer Science and Engineering";
export const ASSOCIATION = "Association of CSE - MAGNUMOPUS";
export const EVENT_DATE = "February 11, 2026";
export const REGISTRATION_FEE = "₹400 per head";
export const OFFICIAL_URL = "https://www.velalarengg.ac.in/";

export const EVENTS: EventDetail[] = [
  {
    id: 'innotalk',
    name: 'INNOTALK',
    type: 'technical',
    description: 'A platform to present your innovative ideas and research papers in front of a panel of experts. Focus on emerging technologies and sustainable solutions.',
    rules: [
      'Maximum 2 members per team.',
      'Soft copy of the paper must be submitted via the registration portal.'
    ],
    teamSize: '2 Members Per Team',
    icon: 'Lightbulb',
  },
  {
    id: 'think-to-sync',
    name: 'THINK TO SYNC',
    type: 'technical',
    description: 'Participants will receive a sheet containing booking steps (e.g., Select movie → Choose show time → Select seats → Payment). Based on the given instructions, participants must arrange or perform the steps in the correct order as quickly as possible.',
    rules: [
      'Participants: Minimum 2 players',
      'Objective: To test speed, coordination, and presence of mind',
      'Winning Criteria: The participant who completes the task correctly in the shortest time wins'
    ],
    teamSize: 'Team of 2+',
    icon: 'Code',
  },
  {
    id: 'mindspark',
    name: 'MINDSPARK',
    type: 'non-technical',
    description: 'Non-Technical Event – Game Rounds featuring memory, speed, vocabulary, and coordination challenges across four exciting rounds.',
    rules: [
      '🟡 Round 1: Bingo Operators Challenge - Recreate operator arrangement from memory (Min 2 players)',
      '🔵 Round 2: Number Matching Challenge - Quickly identify and match numbers on sheet (Min 2 players)',
      '🟢 Round 3: Word Hunt - Find words using clues displayed slide by slide (Min 2 players)',
      '🔴 Final Round: Fast Hands Challenge - Place hands correctly according to instructions (Min 2 players)',
      'Winning based on accuracy, speed, and correct task completion in shortest time'
    ],
    teamSize: 'Minimum 2 Players',
    icon: 'BrainCircuit',
  },
  {
    id: 'dj-music',
    name: 'DJ MUSIC MASHUP',
    type: 'special',
    description: 'Experience an electrifying musical evening from 4 PM onwards. A perfect way to wind down and celebrate the spirit of technical excellence.',
    rules: [
      'Open to all registered symposium participants.',
      'Entry restricted after 4:30 PM.',
      'Valid symposium ID card mandatory.'
    ],
    teamSize: 'Open for All',
    icon: 'Music',
  }
];

export const DATES: ImportantDate[] = [
  { label: 'Main Event', date: '11.02.2026' },
];

export const COORDINATORS: Coordinator[] = [
  { name: 'Ms. M. Thilagarani', phone: '98401 94577', role: 'Faculty' },
  { name: 'Ms. S. Dhivya', phone: '89460 44215', role: 'Faculty' },
  { name: 'Mr. R. Murugavel', phone: '79041 24423', role: 'Student' },
  { name: 'Ms. B. Shalini', phone: '93420 73924', role: 'Student' },
];

export const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeGU35zk7ywlHuLyQrWBiOUqMaOcyreNVOBWZdbICcx0b2Y6Q/viewform?usp=publish-editor";
export const INSTAGRAM_HANDLE = "magnumopus_cse";

export const SYMPOSIUM_CONTEXT = `
  You are the official AI Assistant for Synergia '26 - Horizon, a national level technical symposium.
  College: ${COLLEGE_NAME}
  Department: ${DEPARTMENT}
  Event Date: ${EVENT_DATE}
  Registration Fee: ${REGISTRATION_FEE}
  Location: Thindal, Erode, Tamil Nadu.
  Official Website: ${OFFICIAL_URL}
  Events: 
  1. Innotalk (Technical Paper Presentation, 2 members)
  2. Think to Sync (Coding Challenge)
  3. Mindspark (Non-technical Aptitude/Creative)
  4. DJ Music Mashup (Musical Concert)
  Coordinators: Ms. Thilagarani, Ms. Dhivya (Faculty); R. Murugavel, B. Shalini (Students).
  Registration Link: ${REGISTRATION_URL}
`;
