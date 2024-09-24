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
                "date": "28.09.2024",
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
            "id": "D001", // The ID of the patient's dental chart
            "teeth": {
                "1": { // Tooth number 1
                    "Category": "Orthodontics",
                    "Code": "BR001",
                    "Site": "1",
                    "Suf": {
                        "Mesial": {
                            "Status": "Existing", // Existing, Planned, Completed, In Progress
                            "Pre_Auth": "Approved", // Approved, Denied
                            "Phase": "1", // 1, 2, or 3
                            "Discipline": "Orthodontics", // General, Orthodontics, Endodontics, etc.
                            "Diagnoses": "Crowding",
                            "Notes": "Requires space maintenance",
                            "Estimate": "1200",
                            "Doctor_ID": "D123",
                            "Audit_Date": "2024-08-01",
                            "Created_Date": "2024-07-01"
                        },
                        "Occlusal": {
                            "Status": "Planned",
                            "Pre_Auth": "Denied",
                            "Phase": "2",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Caries",
                            "Notes": "Requires filling",
                            "Estimate": "600",
                            "Doctor_ID": "D456",
                            "Audit_Date": "2024-08-02",
                            "Created_Date": "2024-07-02"
                        },
                        "Distal": {
                            "Status": "Completed",
                            "Pre_Auth": "Approved",
                            "Phase": "3",
                            "Discipline": "General",
                            "Diagnoses": "Fracture",
                            "Notes": "Bonding completed",
                            "Estimate": "500",
                            "Doctor_ID": "D789",
                            "Audit_Date": "2024-08-03",
                            "Created_Date": "2024-07-03"
                        },
                        "Buccal": {
                            "Status": "In Progress",
                            "Pre_Auth": "Approved",
                            "Phase": "1",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Spacing",
                            "Notes": "Aligners in use",
                            "Estimate": "1500",
                            "Doctor_ID": "D101",
                            "Audit_Date": "2024-08-04",
                            "Created_Date": "2024-07-04"
                        },
                        "Lingual": {
                            "Status": "Existing",
                            "Pre_Auth": "Denied",
                            "Phase": "2",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Root Canal",
                            "Notes": "Treatment needed",
                            "Estimate": "800",
                            "Doctor_ID": "D112",
                            "Audit_Date": "2024-08-05",
                            "Created_Date": "2024-07-05"
                        }
                    }
                },
                "2": { // Tooth number 2
                    "Category": "Orthodontics",
                    "Code": "BR002",
                    "Site": "2",
                    "Suf": {
                        "Mesial": {
                            "Status": "Planned",
                            "Pre_Auth": "Approved",
                            "Phase": "1",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Misalignment",
                            "Notes": "Braces recommended",
                            "Estimate": "1800",
                            "Doctor_ID": "D123",
                            "Audit_Date": "2024-08-06",
                            "Created_Date": "2024-07-06"
                        },
                        "Occlusal": {
                            "Status": "Existing",
                            "Pre_Auth": "Denied",
                            "Phase": "2",
                            "Discipline": "General",
                            "Diagnoses": "Attrition",
                            "Notes": "Observation only",
                            "Estimate": "0",
                            "Doctor_ID": "D456",
                            "Audit_Date": "2024-08-07",
                            "Created_Date": "2024-07-07"
                        },
                        "Distal": {
                            "Status": "In Progress",
                            "Pre_Auth": "Approved",
                            "Phase": "3",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Cavities",
                            "Notes": "Filling in process",
                            "Estimate": "900",
                            "Doctor_ID": "D789",
                            "Audit_Date": "2024-08-08",
                            "Created_Date": "2024-07-08"
                        },
                        "Buccal": {
                            "Status": "Completed",
                            "Pre_Auth": "Approved",
                            "Phase": "1",
                            "Discipline": "General",
                            "Diagnoses": "Chipped Tooth",
                            "Notes": "Reconstruction complete",
                            "Estimate": "1000",
                            "Doctor_ID": "D101",
                            "Audit_Date": "2024-08-09",
                            "Created_Date": "2024-07-09"
                        },
                        "Lingual": {
                            "Status": "Planned",
                            "Pre_Auth": "Denied",
                            "Phase": "2",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Impaction",
                            "Notes": "Extraction scheduled",
                            "Estimate": "1100",
                            "Doctor_ID": "D112",
                            "Audit_Date": "2024-08-10",
                            "Created_Date": "2024-07-10"
                        }
                    }
                },
                "3": { // Tooth number 3
                    "Category": "Orthodontics",
                    "Code": "BR003",
                    "Site": "3",
                    "Suf": {
                        "Mesial": {
                            "Status": "Completed",
                            "Pre_Auth": "Approved",
                            "Phase": "1",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Pulpitis",
                            "Notes": "Root canal therapy completed",
                            "Estimate": "2500",
                            "Doctor_ID": "D123",
                            "Audit_Date": "2024-08-11",
                            "Created_Date": "2024-07-11"
                        },
                        "Occlusal": {
                            "Status": "In Progress",
                            "Pre_Auth": "Denied",
                            "Phase": "2",
                            "Discipline": "General",
                            "Diagnoses": "Enamel Erosion",
                            "Notes": "Fluoride application ongoing",
                            "Estimate": "300",
                            "Doctor_ID": "D456",
                            "Audit_Date": "2024-08-12",
                            "Created_Date": "2024-07-12"
                        },
                        "Distal": {
                            "Status": "Existing",
                            "Pre_Auth": "Approved",
                            "Phase": "3",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Overbite",
                            "Notes": "Monitoring progress",
                            "Estimate": "0",
                            "Doctor_ID": "D789",
                            "Audit_Date": "2024-08-13",
                            "Created_Date": "2024-07-13"
                        },
                        "Buccal": {
                            "Status": "Planned",
                            "Pre_Auth": "Denied",
                            "Phase": "1",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Abscess",
                            "Notes": "Surgical intervention required",
                            "Estimate": "2000",
                            "Doctor_ID": "D101",
                            "Audit_Date": "2024-08-14",
                            "Created_Date": "2024-07-14"
                        },
                        "Lingual": {
                            "Status": "Completed",
                            "Pre_Auth": "Approved",
                            "Phase": "2",
                            "Discipline": "General",
                            "Diagnoses": "Hypersensitivity",
                            "Notes": "Desensitizing treatment applied",
                            "Estimate": "700",
                            "Doctor_ID": "D112",
                            "Audit_Date": "2024-08-15",
                            "Created_Date": "2024-07-15"
                        }
                    }
                },
                "4": { // Tooth number 4
                    "Category": "Orthodontics",
                    "Code": "BR004",
                    "Site": "4",
                    "Suf": {
                        "Mesial": {
                            "Status": "In Progress",
                            "Pre_Auth": "Approved",
                            "Phase": "1",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Crossbite",
                            "Notes": "Expander in place",
                            "Estimate": "1300",
                            "Doctor_ID": "D123",
                            "Audit_Date": "2024-08-16",
                            "Created_Date": "2024-07-16"
                        },
                        "Occlusal": {
                            "Status": "Planned",
                            "Pre_Auth": "Denied",
                            "Phase": "2",
                            "Discipline": "General",
                            "Diagnoses": "Decalcification",
                            "Notes": "Preventive care advised",
                            "Estimate": "500",
                            "Doctor_ID": "D456",
                            "Audit_Date": "2024-08-17",
                            "Created_Date": "2024-07-17"
                        },
                        "Distal": {
                            "Status": "Existing",
                            "Pre_Auth": "Approved",
                            "Phase": "3",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Cracked Tooth",
                            "Notes": "Crown advised",
                            "Estimate": "1200",
                            "Doctor_ID": "D789",
                            "Audit_Date": "2024-08-18",
                            "Created_Date": "2024-07-18"
                        },
                        "Buccal": {
                            "Status": "Completed",
                            "Pre_Auth": "Denied",
                            "Phase": "1",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Open Bite",
                            "Notes": "Treatment finished",
                            "Estimate": "0",
                            "Doctor_ID": "D101",
                            "Audit_Date": "2024-08-19",
                            "Created_Date": "2024-07-19"
                        },
                        "Lingual": {
                            "Status": "Planned",
                            "Pre_Auth": "Approved",
                            "Phase": "2",
                            "Discipline": "General",
                            "Diagnoses": "Tartar",
                            "Notes": "Scaling planned",
                            "Estimate": "400",
                            "Doctor_ID": "D112",
                            "Audit_Date": "2024-08-20",
                            "Created_Date": "2024-07-20"
                        }
                    }
                },
                "5": { // Tooth number 5
                    "Category": "Orthodontics",
                    "Code": "BR005",
                    "Site": "5",
                    "Suf": {
                        "Mesial": {
                            "Status": "Existing",
                            "Pre_Auth": "Denied",
                            "Phase": "1",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Gingivitis",
                            "Notes": "Requires regular cleaning",
                            "Estimate": "300",
                            "Doctor_ID": "D123",
                            "Audit_Date": "2024-08-21",
                            "Created_Date": "2024-07-21"
                        },
                        "Occlusal": {
                            "Status": "Completed",
                            "Pre_Auth": "Approved",
                            "Phase": "2",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Overjet",
                            "Notes": "Braces treatment finished",
                            "Estimate": "2200",
                            "Doctor_ID": "D456",
                            "Audit_Date": "2024-08-22",
                            "Created_Date": "2024-07-22"
                        },
                        "Distal": {
                            "Status": "Planned",
                            "Pre_Auth": "Approved",
                            "Phase": "3",
                            "Discipline": "General",
                            "Diagnoses": "Staining",
                            "Notes": "Whitening scheduled",
                            "Estimate": "800",
                            "Doctor_ID": "D789",
                            "Audit_Date": "2024-08-23",
                            "Created_Date": "2024-07-23"
                        },
                        "Buccal": {
                            "Status": "In Progress",
                            "Pre_Auth": "Denied",
                            "Phase": "1",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Periapical Abscess",
                            "Notes": "Drainage required",
                            "Estimate": "1500",
                            "Doctor_ID": "D101",
                            "Audit_Date": "2024-08-24",
                            "Created_Date": "2024-07-24"
                        },
                        "Lingual": {
                            "Status": "Existing",
                            "Pre_Auth": "Approved",
                            "Phase": "2",
                            "Discipline": "General",
                            "Diagnoses": "Plaque Buildup",
                            "Notes": "Scaling and polishing",
                            "Estimate": "350",
                            "Doctor_ID": "D112",
                            "Audit_Date": "2024-08-25",
                            "Created_Date": "2024-07-25"
                        }
                    }
                },
                "6": { // Tooth number 1
                    "Category": "Orthodontics",
                    "Code": "BR001",
                    "Site": "6",
                    "Suf": {
                        "Mesial": {
                            "Status": "Existing", // Existing, Planned, Completed, In Progress
                            "Pre_Auth": "Approved", // Approved, Denied
                            "Phase": "1", // 1, 2, or 3
                            "Discipline": "Orthodontics", // General, Orthodontics, Endodontics, etc.
                            "Diagnoses": "Crowding",
                            "Notes": "Requires space maintenance",
                            "Estimate": "1200",
                            "Doctor_ID": "D123",
                            "Audit_Date": "2024-08-01",
                            "Created_Date": "2024-07-01"
                        },
                        "Occlusal": {
                            "Status": "Planned",
                            "Pre_Auth": "Denied",
                            "Phase": "2",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Caries",
                            "Notes": "Requires filling",
                            "Estimate": "600",
                            "Doctor_ID": "D456",
                            "Audit_Date": "2024-08-02",
                            "Created_Date": "2024-07-02"
                        },
                        "Distal": {
                            "Status": "Completed",
                            "Pre_Auth": "Approved",
                            "Phase": "3",
                            "Discipline": "General",
                            "Diagnoses": "Fracture",
                            "Notes": "Bonding completed",
                            "Estimate": "500",
                            "Doctor_ID": "D789",
                            "Audit_Date": "2024-08-03",
                            "Created_Date": "2024-07-03"
                        },
                        "Buccal": {
                            "Status": "In Progress",
                            "Pre_Auth": "Approved",
                            "Phase": "1",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Spacing",
                            "Notes": "Aligners in use",
                            "Estimate": "1500",
                            "Doctor_ID": "D101",
                            "Audit_Date": "2024-08-04",
                            "Created_Date": "2024-07-04"
                        },
                        "Lingual": {
                            "Status": "Existing",
                            "Pre_Auth": "Denied",
                            "Phase": "2",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Root Canal",
                            "Notes": "Treatment needed",
                            "Estimate": "800",
                            "Doctor_ID": "D112",
                            "Audit_Date": "2024-08-05",
                            "Created_Date": "2024-07-05"
                        }
                    }
                },
                "7": { // Tooth number 2
                    "Category": "Orthodontics",
                    "Code": "BR002",
                    "Site": "7",
                    "Suf": {
                        "Mesial": {
                            "Status": "Planned",
                            "Pre_Auth": "Approved",
                            "Phase": "1",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Misalignment",
                            "Notes": "Braces recommended",
                            "Estimate": "1800",
                            "Doctor_ID": "D123",
                            "Audit_Date": "2024-08-06",
                            "Created_Date": "2024-07-06"
                        },
                        "Occlusal": {
                            "Status": "Existing",
                            "Pre_Auth": "Denied",
                            "Phase": "2",
                            "Discipline": "General",
                            "Diagnoses": "Attrition",
                            "Notes": "Observation only",
                            "Estimate": "0",
                            "Doctor_ID": "D456",
                            "Audit_Date": "2024-08-07",
                            "Created_Date": "2024-07-07"
                        },
                        "Distal": {
                            "Status": "In Progress",
                            "Pre_Auth": "Approved",
                            "Phase": "3",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Cavities",
                            "Notes": "Filling in process",
                            "Estimate": "900",
                            "Doctor_ID": "D789",
                            "Audit_Date": "2024-08-08",
                            "Created_Date": "2024-07-08"
                        },
                        "Buccal": {
                            "Status": "Completed",
                            "Pre_Auth": "Approved",
                            "Phase": "1",
                            "Discipline": "General",
                            "Diagnoses": "Chipped Tooth",
                            "Notes": "Reconstruction complete",
                            "Estimate": "1000",
                            "Doctor_ID": "D101",
                            "Audit_Date": "2024-08-09",
                            "Created_Date": "2024-07-09"
                        },
                        "Lingual": {
                            "Status": "Planned",
                            "Pre_Auth": "Denied",
                            "Phase": "2",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Impaction",
                            "Notes": "Extraction scheduled",
                            "Estimate": "1100",
                            "Doctor_ID": "D112",
                            "Audit_Date": "2024-08-10",
                            "Created_Date": "2024-07-10"
                        }
                    }
                },
                "8": { // Tooth number 3
                    "Category": "Orthodontics",
                    "Code": "BR003",
                    "Site": "8",
                    "Suf": {
                        "Mesial": {
                            "Status": "Completed",
                            "Pre_Auth": "Approved",
                            "Phase": "1",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Pulpitis",
                            "Notes": "Root canal therapy completed",
                            "Estimate": "2500",
                            "Doctor_ID": "D123",
                            "Audit_Date": "2024-08-11",
                            "Created_Date": "2024-07-11"
                        },
                        "Occlusal": {
                            "Status": "In Progress",
                            "Pre_Auth": "Denied",
                            "Phase": "2",
                            "Discipline": "General",
                            "Diagnoses": "Enamel Erosion",
                            "Notes": "Fluoride application ongoing",
                            "Estimate": "300",
                            "Doctor_ID": "D456",
                            "Audit_Date": "2024-08-12",
                            "Created_Date": "2024-07-12"
                        },
                        "Distal": {
                            "Status": "Existing",
                            "Pre_Auth": "Approved",
                            "Phase": "3",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Overbite",
                            "Notes": "Monitoring progress",
                            "Estimate": "0",
                            "Doctor_ID": "D789",
                            "Audit_Date": "2024-08-13",
                            "Created_Date": "2024-07-13"
                        },
                        "Buccal": {
                            "Status": "Planned",
                            "Pre_Auth": "Denied",
                            "Phase": "1",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Abscess",
                            "Notes": "Surgical intervention required",
                            "Estimate": "2000",
                            "Doctor_ID": "D101",
                            "Audit_Date": "2024-08-14",
                            "Created_Date": "2024-07-14"
                        },
                        "Lingual": {
                            "Status": "Completed",
                            "Pre_Auth": "Approved",
                            "Phase": "2",
                            "Discipline": "General",
                            "Diagnoses": "Hypersensitivity",
                            "Notes": "Desensitizing treatment applied",
                            "Estimate": "700",
                            "Doctor_ID": "D112",
                            "Audit_Date": "2024-08-15",
                            "Created_Date": "2024-07-15"
                        }
                    }
                },
                "9": { // Tooth number 4
                    "Category": "Orthodontics",
                    "Code": "BR004",
                    "Site": "9",
                    "Suf": {
                        "Mesial": {
                            "Status": "In Progress",
                            "Pre_Auth": "Approved",
                            "Phase": "1",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Crossbite",
                            "Notes": "Expander in place",
                            "Estimate": "1300",
                            "Doctor_ID": "D123",
                            "Audit_Date": "2024-08-16",
                            "Created_Date": "2024-07-16"
                        },
                        "Occlusal": {
                            "Status": "Planned",
                            "Pre_Auth": "Denied",
                            "Phase": "2",
                            "Discipline": "General",
                            "Diagnoses": "Decalcification",
                            "Notes": "Preventive care advised",
                            "Estimate": "500",
                            "Doctor_ID": "D456",
                            "Audit_Date": "2024-08-17",
                            "Created_Date": "2024-07-17"
                        },
                        "Distal": {
                            "Status": "Existing",
                            "Pre_Auth": "Approved",
                            "Phase": "3",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Cracked Tooth",
                            "Notes": "Crown advised",
                            "Estimate": "1200",
                            "Doctor_ID": "D789",
                            "Audit_Date": "2024-08-18",
                            "Created_Date": "2024-07-18"
                        },
                        "Buccal": {
                            "Status": "Completed",
                            "Pre_Auth": "Denied",
                            "Phase": "1",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Open Bite",
                            "Notes": "Treatment finished",
                            "Estimate": "0",
                            "Doctor_ID": "D101",
                            "Audit_Date": "2024-08-19",
                            "Created_Date": "2024-07-19"
                        },
                        "Lingual": {
                            "Status": "Planned",
                            "Pre_Auth": "Approved",
                            "Phase": "2",
                            "Discipline": "General",
                            "Diagnoses": "Tartar",
                            "Notes": "Scaling planned",
                            "Estimate": "400",
                            "Doctor_ID": "D112",
                            "Audit_Date": "2024-08-20",
                            "Created_Date": "2024-07-20"
                        }
                    }
                },
                "10": { // Tooth number 5
                    "Category": "Orthodontics",
                    "Code": "BR005",
                    "Site": "10",
                    "Suf": {
                        "Mesial": {
                            "Status": "Existing",
                            "Pre_Auth": "Denied",
                            "Phase": "1",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Gingivitis",
                            "Notes": "Requires regular cleaning",
                            "Estimate": "300",
                            "Doctor_ID": "D123",
                            "Audit_Date": "2024-08-21",
                            "Created_Date": "2024-07-21"
                        },
                        "Occlusal": {
                            "Status": "Completed",
                            "Pre_Auth": "Approved",
                            "Phase": "2",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Overjet",
                            "Notes": "Braces treatment finished",
                            "Estimate": "2200",
                            "Doctor_ID": "D456",
                            "Audit_Date": "2024-08-22",
                            "Created_Date": "2024-07-22"
                        },
                        "Distal": {
                            "Status": "Planned",
                            "Pre_Auth": "Approved",
                            "Phase": "3",
                            "Discipline": "General",
                            "Diagnoses": "Staining",
                            "Notes": "Whitening scheduled",
                            "Estimate": "800",
                            "Doctor_ID": "D789",
                            "Audit_Date": "2024-08-23",
                            "Created_Date": "2024-07-23"
                        },
                        "Buccal": {
                            "Status": "In Progress",
                            "Pre_Auth": "Denied",
                            "Phase": "1",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Periapical Abscess",
                            "Notes": "Drainage required",
                            "Estimate": "1500",
                            "Doctor_ID": "D101",
                            "Audit_Date": "2024-08-24",
                            "Created_Date": "2024-07-24"
                        },
                        "Lingual": {
                            "Status": "Existing",
                            "Pre_Auth": "Approved",
                            "Phase": "2",
                            "Discipline": "General",
                            "Diagnoses": "Plaque Buildup",
                            "Notes": "Scaling and polishing",
                            "Estimate": "350",
                            "Doctor_ID": "D112",
                            "Audit_Date": "2024-08-25",
                            "Created_Date": "2024-07-25"
                        }
                    }
                },
                "11": { // Tooth number 1
                    "Category": "Orthodontics",
                    "Code": "BR001",
                    "Site": "11",
                    "Suf": {
                        "Mesial": {
                            "Status": "Existing", // Existing, Planned, Completed, In Progress
                            "Pre_Auth": "Approved", // Approved, Denied
                            "Phase": "1", // 1, 2, or 3
                            "Discipline": "Orthodontics", // General, Orthodontics, Endodontics, etc.
                            "Diagnoses": "Crowding",
                            "Notes": "Requires space maintenance",
                            "Estimate": "1200",
                            "Doctor_ID": "D123",
                            "Audit_Date": "2024-08-01",
                            "Created_Date": "2024-07-01"
                        },
                        "Occlusal": {
                            "Status": "Planned",
                            "Pre_Auth": "Denied",
                            "Phase": "2",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Caries",
                            "Notes": "Requires filling",
                            "Estimate": "600",
                            "Doctor_ID": "D456",
                            "Audit_Date": "2024-08-02",
                            "Created_Date": "2024-07-02"
                        },
                        "Distal": {
                            "Status": "Completed",
                            "Pre_Auth": "Approved",
                            "Phase": "3",
                            "Discipline": "General",
                            "Diagnoses": "Fracture",
                            "Notes": "Bonding completed",
                            "Estimate": "500",
                            "Doctor_ID": "D789",
                            "Audit_Date": "2024-08-03",
                            "Created_Date": "2024-07-03"
                        },
                        "Buccal": {
                            "Status": "In Progress",
                            "Pre_Auth": "Approved",
                            "Phase": "1",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Spacing",
                            "Notes": "Aligners in use",
                            "Estimate": "1500",
                            "Doctor_ID": "D101",
                            "Audit_Date": "2024-08-04",
                            "Created_Date": "2024-07-04"
                        },
                        "Lingual": {
                            "Status": "Existing",
                            "Pre_Auth": "Denied",
                            "Phase": "2",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Root Canal",
                            "Notes": "Treatment needed",
                            "Estimate": "800",
                            "Doctor_ID": "D112",
                            "Audit_Date": "2024-08-05",
                            "Created_Date": "2024-07-05"
                        }
                    }
                },
                "12": { // Tooth number 2
                    "Category": "Orthodontics",
                    "Code": "BR002",
                    "Site": "12",
                    "Suf": {
                        "Mesial": {
                            "Status": "Planned",
                            "Pre_Auth": "Approved",
                            "Phase": "1",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Misalignment",
                            "Notes": "Braces recommended",
                            "Estimate": "1800",
                            "Doctor_ID": "D123",
                            "Audit_Date": "2024-08-06",
                            "Created_Date": "2024-07-06"
                        },
                        "Occlusal": {
                            "Status": "Existing",
                            "Pre_Auth": "Denied",
                            "Phase": "2",
                            "Discipline": "General",
                            "Diagnoses": "Attrition",
                            "Notes": "Observation only",
                            "Estimate": "0",
                            "Doctor_ID": "D456",
                            "Audit_Date": "2024-08-07",
                            "Created_Date": "2024-07-07"
                        },
                        "Distal": {
                            "Status": "In Progress",
                            "Pre_Auth": "Approved",
                            "Phase": "3",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Cavities",
                            "Notes": "Filling in process",
                            "Estimate": "900",
                            "Doctor_ID": "D789",
                            "Audit_Date": "2024-08-08",
                            "Created_Date": "2024-07-08"
                        },
                        "Buccal": {
                            "Status": "Completed",
                            "Pre_Auth": "Approved",
                            "Phase": "1",
                            "Discipline": "General",
                            "Diagnoses": "Chipped Tooth",
                            "Notes": "Reconstruction complete",
                            "Estimate": "1000",
                            "Doctor_ID": "D101",
                            "Audit_Date": "2024-08-09",
                            "Created_Date": "2024-07-09"
                        },
                        "Lingual": {
                            "Status": "Planned",
                            "Pre_Auth": "Denied",
                            "Phase": "2",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Impaction",
                            "Notes": "Extraction scheduled",
                            "Estimate": "1100",
                            "Doctor_ID": "D112",
                            "Audit_Date": "2024-08-10",
                            "Created_Date": "2024-07-10"
                        }
                    }
                },
                "13": { // Tooth number 3
                    "Category": "Orthodontics",
                    "Code": "BR003",
                    "Site": "13",
                    "Suf": {
                        "Mesial": {
                            "Status": "Completed",
                            "Pre_Auth": "Approved",
                            "Phase": "1",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Pulpitis",
                            "Notes": "Root canal therapy completed",
                            "Estimate": "2500",
                            "Doctor_ID": "D123",
                            "Audit_Date": "2024-08-11",
                            "Created_Date": "2024-07-11"
                        },
                        "Occlusal": {
                            "Status": "In Progress",
                            "Pre_Auth": "Denied",
                            "Phase": "2",
                            "Discipline": "General",
                            "Diagnoses": "Enamel Erosion",
                            "Notes": "Fluoride application ongoing",
                            "Estimate": "300",
                            "Doctor_ID": "D456",
                            "Audit_Date": "2024-08-12",
                            "Created_Date": "2024-07-12"
                        },
                        "Distal": {
                            "Status": "Existing",
                            "Pre_Auth": "Approved",
                            "Phase": "3",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Overbite",
                            "Notes": "Monitoring progress",
                            "Estimate": "0",
                            "Doctor_ID": "D789",
                            "Audit_Date": "2024-08-13",
                            "Created_Date": "2024-07-13"
                        },
                        "Buccal": {
                            "Status": "Planned",
                            "Pre_Auth": "Denied",
                            "Phase": "1",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Abscess",
                            "Notes": "Surgical intervention required",
                            "Estimate": "2000",
                            "Doctor_ID": "D101",
                            "Audit_Date": "2024-08-14",
                            "Created_Date": "2024-07-14"
                        },
                        "Lingual": {
                            "Status": "Completed",
                            "Pre_Auth": "Approved",
                            "Phase": "2",
                            "Discipline": "General",
                            "Diagnoses": "Hypersensitivity",
                            "Notes": "Desensitizing treatment applied",
                            "Estimate": "700",
                            "Doctor_ID": "D112",
                            "Audit_Date": "2024-08-15",
                            "Created_Date": "2024-07-15"
                        }
                    }
                },
                "14": { // Tooth number 4
                    "Category": "Orthodontics",
                    "Code": "BR004",
                    "Site": "14",
                    "Suf": {
                        "Mesial": {
                            "Status": "In Progress",
                            "Pre_Auth": "Approved",
                            "Phase": "1",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Crossbite",
                            "Notes": "Expander in place",
                            "Estimate": "1300",
                            "Doctor_ID": "D123",
                            "Audit_Date": "2024-08-16",
                            "Created_Date": "2024-07-16"
                        },
                        "Occlusal": {
                            "Status": "Planned",
                            "Pre_Auth": "Denied",
                            "Phase": "2",
                            "Discipline": "General",
                            "Diagnoses": "Decalcification",
                            "Notes": "Preventive care advised",
                            "Estimate": "500",
                            "Doctor_ID": "D456",
                            "Audit_Date": "2024-08-17",
                            "Created_Date": "2024-07-17"
                        },
                        "Distal": {
                            "Status": "Existing",
                            "Pre_Auth": "Approved",
                            "Phase": "3",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Cracked Tooth",
                            "Notes": "Crown advised",
                            "Estimate": "1200",
                            "Doctor_ID": "D789",
                            "Audit_Date": "2024-08-18",
                            "Created_Date": "2024-07-18"
                        },
                        "Buccal": {
                            "Status": "Completed",
                            "Pre_Auth": "Denied",
                            "Phase": "1",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Open Bite",
                            "Notes": "Treatment finished",
                            "Estimate": "0",
                            "Doctor_ID": "D101",
                            "Audit_Date": "2024-08-19",
                            "Created_Date": "2024-07-19"
                        },
                        "Lingual": {
                            "Status": "Planned",
                            "Pre_Auth": "Approved",
                            "Phase": "2",
                            "Discipline": "General",
                            "Diagnoses": "Tartar",
                            "Notes": "Scaling planned",
                            "Estimate": "400",
                            "Doctor_ID": "D112",
                            "Audit_Date": "2024-08-20",
                            "Created_Date": "2024-07-20"
                        }
                    }
                },
                "15": { // Tooth number 5
                    "Category": "Orthodontics",
                    "Code": "BR005",
                    "Site": "15",
                    "Suf": {
                        "Mesial": {
                            "Status": "Existing",
                            "Pre_Auth": "Denied",
                            "Phase": "1",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Gingivitis",
                            "Notes": "Requires regular cleaning",
                            "Estimate": "300",
                            "Doctor_ID": "D123",
                            "Audit_Date": "2024-08-21",
                            "Created_Date": "2024-07-21"
                        },
                        "Occlusal": {
                            "Status": "Completed",
                            "Pre_Auth": "Approved",
                            "Phase": "2",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Overjet",
                            "Notes": "Braces treatment finished",
                            "Estimate": "2200",
                            "Doctor_ID": "D456",
                            "Audit_Date": "2024-08-22",
                            "Created_Date": "2024-07-22"
                        },
                        "Distal": {
                            "Status": "Planned",
                            "Pre_Auth": "Approved",
                            "Phase": "3",
                            "Discipline": "General",
                            "Diagnoses": "Staining",
                            "Notes": "Whitening scheduled",
                            "Estimate": "800",
                            "Doctor_ID": "D789",
                            "Audit_Date": "2024-08-23",
                            "Created_Date": "2024-07-23"
                        },
                        "Buccal": {
                            "Status": "In Progress",
                            "Pre_Auth": "Denied",
                            "Phase": "1",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Periapical Abscess",
                            "Notes": "Drainage required",
                            "Estimate": "1500",
                            "Doctor_ID": "D101",
                            "Audit_Date": "2024-08-24",
                            "Created_Date": "2024-07-24"
                        },
                        "Lingual": {
                            "Status": "Existing",
                            "Pre_Auth": "Approved",
                            "Phase": "2",
                            "Discipline": "General",
                            "Diagnoses": "Plaque Buildup",
                            "Notes": "Scaling and polishing",
                            "Estimate": "350",
                            "Doctor_ID": "D112",
                            "Audit_Date": "2024-08-25",
                            "Created_Date": "2024-07-25"
                        }
                    }
                },
                "16": { // Tooth number 5
                    "Category": "Orthodontics",
                    "Code": "BR005",
                    "Site": "16",
                    "Suf": {
                        "Mesial": {
                            "Status": "Existing",
                            "Pre_Auth": "Denied",
                            "Phase": "1",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Gingivitis",
                            "Notes": "Requires regular cleaning",
                            "Estimate": "300",
                            "Doctor_ID": "D123",
                            "Audit_Date": "2024-08-21",
                            "Created_Date": "2024-07-21"
                        },
                        "Occlusal": {
                            "Status": "Completed",
                            "Pre_Auth": "Approved",
                            "Phase": "2",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Overjet",
                            "Notes": "Braces treatment finished",
                            "Estimate": "2200",
                            "Doctor_ID": "D456",
                            "Audit_Date": "2024-08-22",
                            "Created_Date": "2024-07-22"
                        },
                        "Distal": {
                            "Status": "Planned",
                            "Pre_Auth": "Approved",
                            "Phase": "3",
                            "Discipline": "General",
                            "Diagnoses": "Staining",
                            "Notes": "Whitening scheduled",
                            "Estimate": "800",
                            "Doctor_ID": "D789",
                            "Audit_Date": "2024-08-23",
                            "Created_Date": "2024-07-23"
                        },
                        "Buccal": {
                            "Status": "In Progress",
                            "Pre_Auth": "Denied",
                            "Phase": "1",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Periapical Abscess",
                            "Notes": "Drainage required",
                            "Estimate": "1500",
                            "Doctor_ID": "D101",
                            "Audit_Date": "2024-08-24",
                            "Created_Date": "2024-07-24"
                        },
                        "Lingual": {
                            "Status": "Existing",
                            "Pre_Auth": "Approved",
                            "Phase": "2",
                            "Discipline": "General",
                            "Diagnoses": "Plaque Buildup",
                            "Notes": "Scaling and polishing",
                            "Estimate": "350",
                            "Doctor_ID": "D112",
                            "Audit_Date": "2024-08-25",
                            "Created_Date": "2024-07-25"
                        }
                    }
                },
                "17": { // Tooth number 5
                    "Category": "Orthodontics",
                    "Code": "BR005",
                    "Site": "17",
                    "Suf": {
                        "Mesial": {
                            "Status": "Existing",
                            "Pre_Auth": "Denied",
                            "Phase": "1",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Gingivitis",
                            "Notes": "Requires regular cleaning",
                            "Estimate": "300",
                            "Doctor_ID": "D123",
                            "Audit_Date": "2024-08-21",
                            "Created_Date": "2024-07-21"
                        },
                        "Occlusal": {
                            "Status": "Completed",
                            "Pre_Auth": "Approved",
                            "Phase": "2",
                            "Discipline": "Orthodontics",
                            "Diagnoses": "Overjet",
                            "Notes": "Braces treatment finished",
                            "Estimate": "2200",
                            "Doctor_ID": "D456",
                            "Audit_Date": "2024-08-22",
                            "Created_Date": "2024-07-22"
                        },
                        "Distal": {
                            "Status": "Planned",
                            "Pre_Auth": "Approved",
                            "Phase": "3",
                            "Discipline": "General",
                            "Diagnoses": "Staining",
                            "Notes": "Whitening scheduled",
                            "Estimate": "800",
                            "Doctor_ID": "D789",
                            "Audit_Date": "2024-08-23",
                            "Created_Date": "2024-07-23"
                        },
                        "Buccal": {
                            "Status": "In Progress",
                            "Pre_Auth": "Denied",
                            "Phase": "1",
                            "Discipline": "Endodontics",
                            "Diagnoses": "Periapical Abscess",
                            "Notes": "Drainage required",
                            "Estimate": "1500",
                            "Doctor_ID": "D101",
                            "Audit_Date": "2024-08-24",
                            "Created_Date": "2024-07-24"
                        },
                        "Lingual": {
                            "Status": "Existing",
                            "Pre_Auth": "Approved",
                            "Phase": "2",
                            "Discipline": "General",
                            "Diagnoses": "Plaque Buildup",
                            "Notes": "Scaling and polishing",
                            "Estimate": "350",
                            "Doctor_ID": "D112",
                            "Audit_Date": "2024-08-25",
                            "Created_Date": "2024-07-25"
                        }
                    }
                },
                
}

        }
    },

]


export default Data;