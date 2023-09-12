# Google Calendar Configuration with Service Account

This guide outlines the steps to configure Google Calendar integration using a service account. A service account allows server-to-server communication with Google APIs, which is useful for automating calendar operations.

## Prerequisites

Before you begin, make sure you have the following:

- A Google Account
- A Google Cloud Platform (GCP) project with the Google Calendar API enabled
- Service Account Key JSON file from GCP

## Steps

### 1. Set up a Google Cloud Project

1.1. Go to the [Google Cloud Console](https://console.cloud.google.com/).

1.2. Create a new project or select an existing one.

### 2. Enable Google Calendar API

2.1. In the Cloud Console, navigate to "APIs & Services" > "Library."

2.2. Search for "Google Calendar API" and enable it for your project.

### 3. Create a Service Account

3.1. In the Cloud Console, navigate to "APIs & Services" > "Credentials."

3.2. Click "Create Credentials" and choose "Service Account Key."

3.3. Fill out the required fields and grant necessary permissions to the service account.

### 4. Obtain Service Account Key JSON

4.1. Once the service account is created, download the JSON key file associated with it.

### 5. Configure Authentication

5.1. In your Node.js or Python code (or the language you are using), set up authentication using the service account key JSON file. Example code for Node.js:

### 6. Create Calendar

6.1. Go to Google Calendar and create a new calendar.
6.2. After creating calendar go to calendar setting and add client email.

# Error: Service accounts cannot invite attendees without Domain-Wide Delegation of Authority

When working with the Google Calendar API using a service account, you might encounter the following error while attempting to add attendees to an event:

> Error: Service accounts cannot invite attendees without Domain-Wide Delegation of Authority.

## Description

This error occurs because service accounts typically lack the necessary permissions to invite attendees to events in Google Calendar.

## Resource

For a more detailed discussion and potential troubleshooting, refer to this [Stack Overflow post](https://stackoverflow.com/questions/60760959/google-calendar-api-service-account-error).
