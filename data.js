const Data=[{
    "id": "12345678",
    "name": "John Doe",
    "image": "johndoe.jpg",
    "gender": "Male",
    "date-of-birth": "01.01.1990",
    "emirates-id": "123-456-789",
    "phone-number": "+971501234567",
    "email": "john.doe@example.com",
    "address": "123 Street, Dubai, UAE",
    "insurance": {
        "company-name": "HealthCare Insurance",
        "type": "Premium",
        "discount": "20%",
        "balance": "5000 AED",
        "charges": "200 AED"
    },
    "appointments": [
        {
            "date": "25.07.2024",
            "time": "10:00:00",
            "status": "confirmed",
            "type": "Consultation",
            "reason": "Routine check-up",
            "dr": {
                "id": "87654321",
                "name": "Dr. Smith",
                "section": "General Medicine",
                "phone-number": "+971509876543",
                "email": "dr.smith@example.com"
            }
        },
        {
            "date": "26.07.2024",
            "time": "21:30:00",
            "status": "canceled",
            "type": "Consultation",
            "reason": "Routine check-up",
            "dr": {
                "id": "87654321",
                "name": "Dr. Smith",
                "section": "General Medicine",
                "phone-number": "+971509876543",
                "email": "dr.smith@example.com"
            }
        },
        {
            "date": "25.07.2024",
            "time": "16:00:00",
            "status": "pending",
            "type": "Consultation",
            "reason": "Routine check-up",
            "dr": {
                "id": "87654321",
                "name": "Dr. Smith",
                "section": "General Medicine",
                "phone-number": "+971509876543",
                "email": "dr.smith@example.com"
            }
        },
        {
            "date": "25.07.2024",
            "time": "18:00:00",
            "status": "confirmed",
            "type": "Consultation",
            "reason": "Routine check-up",
            "dr": {
                "id": "87654321",
                "name": "Dr. Smith",
                "section": "General Medicine",
                "phone-number": "+971509876543",
                "email": "dr.smith@example.com"
            }
        }
    ],
    "medications": [
        {
            "id": "11111111",
            "name": "Paracetamol",
            "type": "Analgesic",
            "dosage-form": ["Tablet", "Syrup"],
            "strength": 500,
            "for-uses": ["Pain", "Fever"],
            "avoid-uses": ["Liver disease"],
            "dose": "500 mg every 8 hours",
            "intake-time": "After meals",
            "expiry-date": "01.01.2025",
            "manufacture-details": {
                "id": "XYZ12345",
                "name": "ABC Pharma",
                "date-of-purchase": "01.07.2024",
                "quantity": 100
            }
        }
    ],
    "allergies": ["Peanuts"],
    "dental-details": {
        "id": "D001",
        "Category": "Orthodontics",
        "Sub_Category": "Braces",
        "Code": "BR001",
        "Site": "Upper Jaw",
        "Suf": "NA",
        "Status": "Completed",
        "Pre_Auth": "Yes",
        "Phase": "2",
        "Discipline": "Dentistry",
        "Diagnoses": "Malocclusion",
        "Note": "Follow-up in 6 months",
        "Estimate": "3000 AED",
        "Doctor_ID": "D12345",
        "Audit Date": "01.06.2024",
        "Created_Date": "01.05.2024"
    },
    "created-date": "01.01.2024"
},
{
    "id": "23456789",
    "name": "Jane Smith",
    "image": "janesmith.jpg",
    "gender": "Female",
    "date-of-birth": "15.05.1985",
    "emirates-id": "234-567-890",
    "phone-number": "+971502345678",
    "email": "jane.smith@example.com",
    "address": "456 Avenue, Abu Dhabi, UAE",
    "insurance": {
        "company-name": "Global Health",
        "type": "Basic",
        "discount": "10%",
        "balance": "3000 AED",
        "charges": "150 AED"
    },
    "appointments": [
        {
            "date": "28.07.2024",
            "time": "14:00:00",
            "status": "pending",
            "type": "Dental",
            "reason": "Toothache",
            "dr": {
                "id": "98765432",
                "name": "Dr. Brown",
                "section": "Dentistry",
                "phone-number": "+971508765432",
                "email": "dr.brown@example.com"
            }
        }
    ],
    "medications": [
        {
            "id": "22222222",
            "name": "Ibuprofen",
            "type": "NSAID",
            "dosage-form": ["Tablet", "Capsule"],
            "strength": 400,
            "for-uses": ["Pain", "Inflammation"],
            "avoid-uses": ["Stomach ulcers"],
            "dose": "400 mg every 6 hours",
            "intake-time": "With meals",
            "expiry-date": "01.02.2025",
            "manufacture-details": {
                "id": "XYZ67890",
                "name": "DEF Pharma",
                "date-of-purchase": "01.07.2024",
                "quantity": 200
            }
        }
    ],
    "allergies": ["Penicillin"],
    "dental-details": {
        "id": "D002",
        "Category": "Restorative",
        "Sub_Category": "Filling",
        "Code": "RF001",
        "Site": "Molar",
        "Suf": "NA",
        "Status": "Scheduled",
        "Pre_Auth": "No",
        "Phase": "1",
        "Discipline": "Dentistry",
        "Diagnoses": "Cavity",
        "Note": "Requires filling",
        "Estimate": "500 AED",
        "Doctor_ID": "D23456",
        "Audit Date": "01.07.2024",
        "Created_Date": "01.06.2024"
    },
    "created-date": "01.02.2024"
},
{
    "id": "34567890",
    "name": "Ahmed Ali",
    "image": "ahmedali.jpg",
    "gender": "Male",
    "date-of-birth": "20.03.1978",
    "emirates-id": "345-678-901",
    "phone-number": "+971503456789",
    "email": "ahmed.ali@example.com",
    "address": "789 Road, Sharjah, UAE",
    "insurance": {
        "company-name": "Premium Care",
        "type": "Gold",
        "discount": "25%",
        "balance": "7000 AED",
        "charges": "250 AED"
    },
    "appointments": [
        {
            "date": "29.07.2024",
            "time": "09:00:00",
            "status": "done",
            "type": "Cardiology",
            "reason": "Chest pain",
            "dr": {
                "id": "12345678",
                "name": "Dr. Green",
                "section": "Cardiology",
                "phone-number": "+971501234567",
                "email": "dr.green@example.com"
            }
        }
    ],
    "medications": [
        {
            "id": "33333333",
            "name": "Aspirin",
            "type": "Antiplatelet",
            "dosage-form": ["Tablet"],
            "strength": 81,
            "for-uses": ["Blood thinner"],
            "avoid-uses": ["Bleeding disorders"],
            "dose": "81 mg daily",
            "intake-time": "Morning",
            "expiry-date": "01.03.2025",
            "manufacture-details": {
                "id": "XYZ34567",
                "name": "GHI Pharma",
                "date-of-purchase": "01.07.2024",
                "quantity": 150
            }
        }
    ],
    "allergies": ["None"],
    "dental-details": {
        "id": "D003",
        "Category": "Endodontics",
        "Sub_Category": "Root Canal",
        "Code": "RC001",
        "Site": "Premolar",
        "Suf": "NA",
        "Status": "In Progress",
        "Pre_Auth": "Yes",
        "Phase": "1",
        "Discipline": "Dentistry",
        "Diagnoses": "Infection",
        "Note": "Follow-up needed",
        "Estimate": "2000 AED",
        "Doctor_ID": "D34567",
        "Audit Date": "01.06.2024",
        "Created_Date": "01.05.2024"
    },
    "created-date": "01.03.2024"
},
{
    "id": "45678901",
    "name": "Fatima Khan",
    "image": "fatimakhan.jpg",
    "gender": "Female",
    "date-of-birth": "10.10.1995",
    "emirates-id": "456-789-012",
    "phone-number": "+971504567890",
    "email": "fatima.khan@example.com",
    "address": "123 Plaza, Ajman, UAE",
    "insurance": {
        "company-name": "Secure Health",
        "type": "Silver",
        "discount": "15%",
        "balance": "4000 AED",
        "charges": "100 AED"
    },
    "appointments": [
        {
            "date": "10.09.2024",
            "time": "11:00:00",
            "status": "canceled",
            "type": "Dermatology",
            "reason": "Skin rash",
            "dr": {
                "id": "23456789",
                "name": "Dr. White",
                "section": "Dermatology",
                "phone-number": "+971502345678",
                "email": "dr.white@example.com"
            }
        }
    ],
    "medications": [
        {
            "id": "44444444",
            "name": "Hydrocortisone Cream",
            "type": "Corticosteroid",
            "dosage-form": ["Cream"],
            "strength": 1,
            "for-uses": ["Inflammation", "Allergic reactions"],
            "avoid-uses": ["Open wounds"],
            "dose": "Apply thin layer twice daily",
            "intake-time": "Morning and evening",
            "expiry-date": "01.04.2025",
            "manufacture-details": {
                "id": "XYZ45678",
                "name": "JKL Pharma",
                "date-of-purchase": "01.08.2024",
                "quantity": 50
            }
        }
    ],
    "allergies": ["Shellfish"],
    "dental-details": {
        "id": "D004",
        "Category": "Prosthodontics",
        "Sub_Category": "Dentures",
        "Code": "DN001",
        "Site": "Lower Jaw",
        "Suf": "NA",
        "Status": "Completed",
        "Pre_Auth": "No",
        "Phase": "3",
        "Discipline": "Dentistry",
        "Diagnoses": "Tooth loss",
        "Note": "Regular check-ups required",
        "Estimate": "2500 AED",
        "Doctor_ID": "D45678",
        "Audit Date": "01.06.2024",
        "Created_Date": "01.05.2024"
    },
    "created-date": "01.04.2024"
},
{
    "id": "56789012",
    "name": "Mohammed Hassan",
    "image": "mohammedhassan.jpg",
    "gender": "Male",
    "date-of-birth": "25.12.1982",
    "emirates-id": "567-890-123",
    "phone-number": "+971505678901",
    "email": "mohammed.hassan@example.com",
    "address": "456 Boulevard, Ras Al Khaimah, UAE",
    "insurance": {
        "company-name": "Total Care",
        "type": "Platinum",
        "discount": "30%",
        "balance": "8000 AED",
        "charges": "300 AED"
    },
    "appointments": [
        {
            "date": "25.07.2024",
            "time": "16:00:00",
            "status": "confirmed",
            "type": "Orthopedics",
            "reason": "Knee pain",
            "dr": {
                "id": "34567890",
                "name": "Dr. Blue",
                "section": "Orthopedics",
                "phone-number": "+971503456789",
                "email": "dr.blue@example.com"
            }
        }
    ],
    "medications": [
        {
            "id": "55555555",
            "name": "Diclofenac",
            "type": "NSAID",
            "dosage-form": ["Gel", "Tablet"],
            "strength": 50,
            "for-uses": ["Pain", "Inflammation"],
            "avoid-uses": ["Heart disease"],
            "dose": "50 mg twice daily",
            "intake-time": "After meals",
            "expiry-date": "01.05.2025",
            "manufacture-details": {
                "id": "XYZ56789",
                "name": "MNO Pharma",
                "date-of-purchase": "01.07.2024",
                "quantity": 120
            }
        }
    ],
    "allergies": ["Aspirin"],
    "dental-details": {
        "id": "D005",
        "Category": "Periodontics",
        "Sub_Category": "Scaling",
        "Code": "SC001",
        "Site": "Full Mouth",
        "Suf": "NA",
        "Status": "Scheduled",
        "Pre_Auth": "Yes",
        "Phase": "1",
        "Discipline": "Dentistry",
        "Diagnoses": "Gingivitis",
        "Note": "Follow-up in 3 months",
        "Estimate": "1500 AED",
        "Doctor_ID": "D56789",
        "Audit Date": "01.06.2024",
        "Created_Date": "01.05.2024"
    },
    "created-date": "01.05.2024"
},
{
    "id": "67890123",
    "name": "Sara Ahmed",
    "image": "saraahmed.jpg",
    "gender": "Female",
    "date-of-birth": "05.07.1993",
    "emirates-id": "678-901-234",
    "phone-number": "+971506789012",
    "email": "sara.ahmed@example.com",
    "address": "789 Lane, Fujairah, UAE",
    "insurance": {
        "company-name": "Health First",
        "type": "Bronze",
        "discount": "10%",
        "balance": "2000 AED",
        "charges": "50 AED"
    },
    "appointments": [
        {
            "date": "26.07.2024",
            "time": "12:00:00",
            "status": "confirmed",
            "type": "Pediatrics",
            "reason": "Child's check-up",
            "dr": {
                "id": "45678901",
                "name": "Dr. Pink",
                "section": "Pediatrics",
                "phone-number": "+971504567890",
                "email": "dr.pink@example.com"
            }
        }
    ],
    "medications": [
        {
            "id": "66666666",
            "name": "Amoxicillin",
            "type": "Antibiotic",
            "dosage-form": ["Capsule", "Suspension"],
            "strength": 250,
            "for-uses": ["Infections"],
            "avoid-uses": ["Allergy to penicillin"],
            "dose": "250 mg every 8 hours",
            "intake-time": "With meals",
            "expiry-date": "01.06.2025",
            "manufacture-details": {
                "id": "XYZ67890",
                "name": "PQR Pharma",
                "date-of-purchase": "01.07.2024",
                "quantity": 200
            }
        }
    ],
    "allergies": ["None"],
    "dental-details": {
        "id": "D006",
        "Category": "Cosmetic Dentistry",
        "Sub_Category": "Teeth Whitening",
        "Code": "TW001",
        "Site": "Full Mouth",
        "Suf": "NA",
        "Status": "Completed",
        "Pre_Auth": "No",
        "Phase": "1",
        "Discipline": "Dentistry",
        "Diagnoses": "Discoloration",
        "Note": "Good results",
        "Estimate": "1000 AED",
        "Doctor_ID": "D67890",
        "Audit Date": "01.06.2024",
        "Created_Date": "01.05.2024"
    },
    "created-date": "01.06.2024"
},

]


export default Data;