const Data = [
    {
        'id': "1111",
        'name': "Ahman Hassan Ali Mohammed Al-Flany",
        'image': "pfp.jpg",
        'Gender': "Male",
        'date-of-birth': "01.01.1998",
        'emirates-id': "784-XXXX-XXXXXXX-X",
        'phone-number': "+971XXXXXXXX",
        'email': "ahman@example.com",
        'address': "123 Street, Dubai, UAE",
        'insurance': {
            'company-name': 'Dubai Police',
            'type': 'Golden',
            'discount': '20%',
            'balance': '5000 AED',
            'charges': '200 AED',
        },
        'appointments': [
            {
                "date": "28.08.2024",
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
        ],
        'medications': [
            {
                "frequency": 5,
                "id": "11111113",
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
        "allergies": [
            {
                "id": "A001",
                "name": "Peanuts",
                "description": "Allergic reaction to peanuts, causing potential anaphylaxis."
            }
        ],
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
            "Estimate": "3000 AED",
            "Doctor_ID": "D12345",
            "Audit Date": "01.06.2024",
            "Note": "Follow-up in 6 months",
            "Created_Date": "01.05.2024"
        },
        "created-date": "01.01.2024"
    },
    {
        'id': "1112",
        'name': "Fatima Ahmed Al-Mansoori",
        'image': "pfp2.jpg",
        'Gender': "Female",
        'date-of-birth': "05.03.1995",
        'emirates-id': "784-XXXX-XXXXXXX-1",
        'phone-number': "+971XXXXXXXX1",
        'email': "fatima@example.com",
        'address': "456 Avenue, Abu Dhabi, UAE",
        'insurance': {
            'company-name': 'Etisalat',
            'type': 'Silver',
            'discount': '15%',
            'balance': '3000 AED',
            'charges': '150 AED',
        },
        'appointments': [
            {
                "date": "30.08.2024",
                "time": "11:30:00",
                "status": "pending",
                "type": "Specialist Consultation",
                "reason": "Migraine",
                "dr": {
                    "id": "87654322",
                    "name": "Dr. Sara",
                    "section": "Neurology",
                    "phone-number": "+971509876544",
                    "email": "dr.sara@example.com"
                }
            },
        ],
        'medications': [
            {
                "frequency": 5,
                "id": "11111114",
                "name": "Ibuprofen",
                "type": "NSAID",
                "dosage-form": ["Tablet"],
                "strength": 400,
                "for-uses": ["Pain relief", "Anti-inflammatory"],
                "avoid-uses": ["Stomach ulcers"],
                "dose": "400 mg as needed",
                "intake-time": "Afternoon",
                "expiry-date": "15.04.2025",
                "manufacture-details": {
                    "id": "XYZ34568",
                    "name": "ABC Pharma",
                    "date-of-purchase": "05.07.2024",
                    "quantity": 100
                }
            },
            {
                "id": "11111114",
                "name": "Ibuprofen",
                "type": "NSAID",
                "dosage-form": ["Tablet"],
                "strength": 400,
                "for-uses": ["Pain relief", "Anti-inflammatory"],
                "avoid-uses": ["Stomach ulcers"],
                "dose": "400 mg as needed",
                "intake-time": "Afternoon",
                "expiry-date": "15.04.2025",
                "manufacture-details": {
                    "id": "XYZ34568",
                    "name": "ABC Pharma",
                    "date-of-purchase": "05.07.2024",
                    "quantity": 100
                }
            },
            {
                "id": "11111114",
                "name": "Ibuprofen",
                "type": "NSAID",
                "dosage-form": ["Tablet"],
                "strength": 400,
                "for-uses": ["Pain relief", "Anti-inflammatory"],
                "avoid-uses": ["Stomach ulcers"],
                "dose": "400 mg as needed",
                "intake-time": "Afternoon",
                "expiry-date": "15.04.2025",
                "manufacture-details": {
                    "id": "XYZ34568",
                    "name": "ABC Pharma",
                    "date-of-purchase": "05.07.2024",
                    "quantity": 100
                }
            },
            {
                "id": "11111114",
                "name": "Ibuprofen",
                "type": "NSAID",
                "dosage-form": ["Tablet"],
                "strength": 400,
                "for-uses": ["Pain relief", "Anti-inflammatory"],
                "avoid-uses": ["Stomach ulcers"],
                "dose": "400 mg as needed",
                "intake-time": "Afternoon",
                "expiry-date": "15.04.2025",
                "manufacture-details": {
                    "id": "XYZ34568",
                    "name": "ABC Pharma",
                    "date-of-purchase": "05.07.2024",
                    "quantity": 100
                }
            },
        ],
        "allergies": [
            {
                "id": "A002",
                "name": "Shellfish",
                "description": "Allergic reaction to shellfish, leading to hives and breathing difficulty."
            }
        ],
        "dental-details": {
            "id": "D002",
            "Category": "Endodontics",
            "Sub_Category": "Root Canal",
            "Code": "RC001",
            "Site": "Lower Molar",
            "Suf": "NA",
            "Status": "In Progress",
            "Pre_Auth": "No",
            "Phase": "1",
            "Discipline": "Dentistry",
            "Diagnoses": "Pulpitis",
            "Estimate": "1500 AED",
            "Doctor_ID": "D12346",
            "Audit Date": "15.07.2024",
            "Note": "Complete treatment in 2 weeks",
            "Created_Date": "10.07.2024"
        },
        "created-date": "05.02.2024"
    },
    {
        'id': "1113",
        'name': "Omar Khaled Al-Zaabi",
        'image': "pfp3.jpg",
        'Gender': "Male",
        'date-of-birth': "10.08.1988",
        'emirates-id': "784-XXXX-XXXXXXX-2",
        'phone-number': "+971XXXXXXXX2",
        'email': "omar@example.com",
        'address': "789 Boulevard, Sharjah, UAE",
        'insurance': {
            'company-name': 'Sharjah Coop',
            'type': 'Bronze',
            'discount': '10%',
            'balance': '2000 AED',
            'charges': '100 AED',
        },
        'appointments': [
            {
                "date": "30.08.2024",
                "time": "09:00:00",
                "status": "confirmed",
                "type": "Dental",
                "reason": "Toothache",
                "dr": {
                    "id": "87654323",
                    "name": "Dr. John",
                    "section": "Dentistry",
                    "phone-number": "+971509876545",
                    "email": "dr.john@example.com"
                }
            },
        ],
        'medications': [
            {
                "frequency": 5,
                "id": "11111115",
                "name": "Amoxicillin",
                "type": "Antibiotic",
                "dosage-form": ["Capsule"],
                "strength": 500,
                "for-uses": ["Bacterial infections"],
                "avoid-uses": ["Allergy to penicillin"],
                "dose": "500 mg every 8 hours",
                "intake-time": "Morning, Afternoon, Evening",
                "expiry-date": "30.12.2024",
                "manufacture-details": {
                    "id": "XYZ34569",
                    "name": "DEF Pharma",
                    "date-of-purchase": "20.07.2024",
                    "quantity": 60
                }
            }
        ],
        "allergies": [
            {
                "id": "A003",
                "name": "Penicillin",
                "description": "Severe allergic reaction to penicillin, causing rash and swelling."
            }
        ],
        "dental-details": {
            "id": "D003",
            "Category": "Periodontics",
            "Sub_Category": "Scaling",
            "Code": "SC001",
            "Site": "Full Mouth",
            "Suf": "NA",
            "Status": "Completed",
            "Pre_Auth": "Yes",
            "Phase": "3",
            "Discipline": "Dentistry",
            "Diagnoses": "Gingivitis",
            "Estimate": "800 AED",
            "Doctor_ID": "D12347",
            "Audit Date": "01.08.2024",
            "Note": "Review in 3 months",
            "Created_Date": "25.07.2024"
        },
        "created-date": "10.03.2024"
    },
    {
        'id': "1114",
        'name': "Salma Nasser Al-Suwaidi",
        'image': "pfp4.jpg",
        'Gender': "Female",
        'date-of-birth': "12.11.1992",
        'emirates-id': "784-XXXX-XXXXXXX-3",
        'phone-number': "+971XXXXXXXX3",
        'email': "salma@example.com",
        'address': "101 Street, Ras Al Khaimah, UAE",
        'insurance': {
            'company-name': 'RAK Bank',
            'type': 'Platinum',
            'discount': '25%',
            'balance': '7000 AED',
            'charges': '250 AED',
        },
        'appointments': [
            {
                "date": "02.09.2024",
                "time": "14:00:00",
                "status": "confirmed",
                "type": "Gynecology",
                "reason": "Routine check-up",
                "dr": {
                    "id": "87654324",
                    "name": "Dr. Ayesha",
                    "section": "Gynecology",
                    "phone-number": "+971509876546",
                    "email": "dr.ayesha@example.com"
                }
            },
        ],
        'medications': [
            {
                "frequency": 5,
                "id": "11111116",
                "name": "Paracetamol",
                "type": "Analgesic",
                "dosage-form": ["Tablet"],
                "strength": 500,
                "for-uses": ["Pain relief", "Fever"],
                "avoid-uses": ["Liver disease"],
                "dose": "500 mg every 4-6 hours",
                "intake-time": "Morning, Evening",
                "expiry-date": "01.07.2025",
                "manufacture-details": {
                    "id": "XYZ34570",
                    "name": "HIJ Pharma",
                    "date-of-purchase": "12.08.2024",
                    "quantity": 200
                }
            }
        ],
        "allergies": [
            {
                "id": "A004",
                "name": "Latex",
                "description": "Allergic reaction to latex, causing rash and itching."
            }
        ],
        "dental-details": {
            "id": "D004",
            "Category": "Prosthodontics",
            "Sub_Category": "Crown",
            "Code": "CR001",
            "Site": "Lower Molar",
            "Suf": "NA",
            "Status": "In Progress",
            "Pre_Auth": "Yes",
            "Phase": "2",
            "Discipline": "Dentistry",
            "Diagnoses": "Tooth Decay",
            "Estimate": "2000 AED",
            "Doctor_ID": "D12348",
            "Audit Date": "15.09.2024",
            "Note": "Fit crown in 2 weeks",
            "Created_Date": "10.09.2024"
        },
        "created-date": "12.02.2024"
    },
    {
        'id': "1115",
        'name': "Abdullah Mohamed Al-Qasimi",
        'image': "pfp5.jpg",
        'Gender': "Male",
        'date-of-birth': "15.12.1985",
        'emirates-id': "784-XXXX-XXXXXXX-4",
        'phone-number': "+971XXXXXXXX4",
        'email': "abdullah@example.com",
        'address': "321 Lane, Fujairah, UAE",
        'insurance': {
            'company-name': 'Fujairah National',
            'type': 'Gold',
            'discount': '20%',
            'balance': '6000 AED',
            'charges': '300 AED',
        },
        'appointments': [
            {
                "date": "05.09.2024",
                "time": "12:00:00",
                "status": "pending",
                "type": "Cardiology",
                "reason": "Chest Pain",
                "dr": {
                    "id": "87654325",
                    "name": "Dr. Khaled",
                    "section": "Cardiology",
                    "phone-number": "+971509876547",
                    "email": "dr.khaled@example.com"
                }
            },
        ],
        'medications': [
            {
                "frequency": 5,
                "id": "11111117",
                "name": "Atorvastatin",
                "type": "Statin",
                "dosage-form": ["Tablet"],
                "strength": 20,
                "for-uses": ["Cholesterol management"],
                "avoid-uses": ["Liver disease"],
                "dose": "20 mg daily",
                "intake-time": "Evening",
                "expiry-date": "30.04.2025",
                "manufacture-details": {
                    "id": "XYZ34571",
                    "name": "KLM Pharma",
                    "date-of-purchase": "15.09.2024",
                    "quantity": 90
                }
            }
        ],
        "allergies": [
            {
                "id": "A005",
                "name": "Aspirin",
                "description": "Allergic reaction to aspirin, causing rash and breathing difficulty."
            }
        ],
        "dental-details": {
            "id": "D005",
            "Category": "Oral Surgery",
            "Sub_Category": "Tooth Extraction",
            "Code": "TE001",
            "Site": "Upper Molar",
            "Suf": "NA",
            "Status": "Completed",
            "Pre_Auth": "No",
            "Phase": "2",
            "Discipline": "Dentistry",
            "Diagnoses": "Impacted Tooth",
            "Estimate": "500 AED",
            "Doctor_ID": "D12349",
            "Audit Date": "01.10.2024",
            "Note": "Follow-up in 2 weeks",
            "Created_Date": "25.09.2024"
        },
        "created-date": "15.03.2024"
    },
    {
        'id': "1116",
        'name': "Latifa Rashid Al-Nuaimi",
        'image': "pfp6.jpg",
        'Gender': "Female",
        'date-of-birth': "20.04.1990",
        'emirates-id': "784-XXXX-XXXXXXX-5",
        'phone-number': "+971XXXXXXXX5",
        'email': "latifa@example.com",
        'address': "654 Road, Umm Al Quwain, UAE",
        'insurance': {
            'company-name': 'UAQ Insurance',
            'type': 'Silver',
            'discount': '10%',
            'balance': '3500 AED',
            'charges': '150 AED',
        },
        'appointments': [
            {
                "date": "31.08.2024",
                "time": "16:00:00",
                "status": "confirmed",
                "type": "Orthopedics",
                "reason": "Knee Pain",
                "dr": {
                    "id": "87654326",
                    "name": "Dr. Rashid",
                    "section": "Orthopedics",
                    "phone-number": "+971509876548",
                    "email": "dr.rashid@example.com"
                }
            },
        ],
        'medications': [
            {
                "frequency": 5,
                "id": "11111118",
                "name": "Diclofenac",
                "type": "NSAID",
                "dosage-form": ["Gel"],
                "strength": 1,
                "for-uses": ["Pain relief"],
                "avoid-uses": ["Skin irritation"],
                "dose": "Apply twice daily",
                "intake-time": "Morning, Evening",
                "expiry-date": "01.08.2025",
                "manufacture-details": {
                    "id": "XYZ34572",
                    "name": "NOP Pharma",
                    "date-of-purchase": "01.10.2024",
                    "quantity": "2 tubes"
                }
            }
        ],
        "allergies": [
            {
                "id": "A006",
                "name": "Sulfa drugs",
                "description": "Allergic reaction to sulfa drugs, leading to rash and swelling."
            }
        ],
        "dental-details": {
            "id": "D006",
            "Category": "Orthodontics",
            "Sub_Category": "Retainer",
            "Code": "RT001",
            "Site": "Full Mouth",
            "Suf": "NA",
            "Status": "In Progress",
            "Pre_Auth": "Yes",
            "Phase": "1",
            "Discipline": "Dentistry",
            "Diagnoses": "Teeth Alignment",
            "Estimate": "2500 AED",
            "Doctor_ID": "D12350",
            "Audit Date": "10.11.2024",
            "Note": "Adjust retainer in 6 months",
            "Created_Date": "05.11.2024"
        },
        "created-date": "20.03.2024"
    },
    {
        'id': "1117",
        'name': "Mohammed Abdullah Al-Rumaithi",
        'image': "pfp7.jpg",
        'Gender': "Male",
        'date-of-birth': "28.02.1983",
        'emirates-id': "784-XXXX-XXXXXXX-6",
        'phone-number': "+971XXXXXXXX6",
        'email': "mohammed@example.com",
        'address': "987 Boulevard, Ajman, UAE",
        'insurance': {
            'company-name': 'Ajman University',
            'type': 'Platinum',
            'discount': '30%',
            'balance': '8000 AED',
            'charges': '400 AED',
        },
        'appointments': [
            {
                "date": "30.08.2024",
                "time": "09:00:00",
                "status": "confirmed",
                "type": "Dermatology",
                "reason": "Skin Rash",
                "dr": {
                    "id": "87654327",
                    "name": "Dr. Noura",
                    "section": "Dermatology",
                    "phone-number": "+971509876549",
                    "email": "dr.noura@example.com"
                }
            },
        ],
        'medications': [
            {
                "frequency": 5,
                "id": "11111119",
                "name": "Hydrocortisone",
                "type": "Steroid",
                "dosage-form": ["Cream"],
                "strength": 1,
                "for-uses": ["Skin inflammation"],
                "avoid-uses": ["Infected skin"],
                "dose": "Apply twice daily",
                "intake-time": "Morning, Evening",
                "expiry-date": "15.09.2025",
                "manufacture-details": {
                    "id": "XYZ34573",
                    "name": "QRS Pharma",
                    "date-of-purchase": "05.08.2024",
                    "quantity": "1 tube"
                }
            }
        ],
        "allergies": [
            {
                "id": "A007",
                "name": "Penicillin",
                "description": "Allergic reaction to penicillin, causing rash and anaphylaxis."
            }
        ],
        "dental-details": {
            "id": "D007",
            "Category": "Endodontics",
            "Sub_Category": "Root Canal",
            "Code": "RC001",
            "Site": "Lower Molar",
            "Suf": "NA",
            "Status": "In Progress",
            "Pre_Auth": "Yes",
            "Phase": "2",
            "Discipline": "Dentistry",
            "Diagnoses": "Tooth Infection",
            "Estimate": "3000 AED",
            "Doctor_ID": "D12351",
            "Audit Date": "01.07.2024",
            "Note": "Schedule crown fitting",
            "Created_Date": "20.06.2024"
        },
        "created-date": "25.04.2024"
    },
    {
        'id': "1118",
        'name': "Sara Ahmed Al-Mazrouei",
        'image': "pfp8.jpg",
        'Gender': "Female",
        'date-of-birth': "11.11.1997",
        'emirates-id': "784-XXXX-XXXXXXX-7",
        'phone-number': "+971XXXXXXXX7",
        'email': "sara@example.com",
        'address': "456 Avenue, Dubai, UAE",
        'insurance': {
            'company-name': 'Dubai Health',
            'type': 'Gold',
            'discount': '15%',
            'balance': '5500 AED',
            'charges': '250 AED',
        },
        'appointments': [
            {
                "date": "27.08.2024",
                "time": "13:00:00",
                "status": "canceled",
                "type": "Ophthalmology",
                "reason": "Eye Check-up",
                "dr": {
                    "id": "87654328",
                    "name": "Dr. Mona",
                    "section": "Ophthalmology",
                    "phone-number": "+971509876550",
                    "email": "dr.mona@example.com"
                }
            },
        ],
        'medications': [
            {
                "frequency": 5,
                "id": "11111120",
                "name": "Latanoprost",
                "type": "Prostaglandin",
                "dosage-form": ["Eye Drops"],
                "strength": 0.005,
                "for-uses": ["Glaucoma"],
                "avoid-uses": ["Eye infection"],
                "dose": "1 drop in affected eye daily",
                "intake-time": "Evening",
                "expiry-date": "01.12.2025",
                "manufacture-details": {
                    "id": "XYZ34574",
                    "name": "TUV Pharma",
                    "date-of-purchase": "01.09.2024",
                    "quantity": "1 bottle"
                }
            }
        ],
        "allergies": [
            {
                "id": "A008",
                "name": "Shellfish",
                "description": "Allergic reaction to shellfish, causing hives and difficulty breathing."
            }
        ],
        "dental-details": {
            "id": "D008",
            "Category": "Periodontics",
            "Sub_Category": "Scaling",
            "Code": "SC001",
            "Site": "Full Mouth",
            "Suf": "NA",
            "Status": "Completed",
            "Pre_Auth": "No",
            "Phase": "1",
            "Discipline": "Dentistry",
            "Diagnoses": "Gum Disease",
            "Estimate": "1500 AED",
            "Doctor_ID": "D12352",
            "Audit Date": "01.08.2024",
            "Note": "Follow-up in 3 months",
            "Created_Date": "25.07.2024"
        },
        "created-date": "30.05.2024"
    }
]


export default Data;