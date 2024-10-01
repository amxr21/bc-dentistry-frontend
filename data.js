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
                    "18": {
                        "Category": "General",
                        "Code": "BR006",
                        "Site": "18",
                        "Suf": {
                            "Mesial": {
                                "Status": "Existing",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "Orthodontics",
                                "Diagnoses": "Crowding",
                                "Notes": "Requires further alignment",
                                "Estimate": "1500",
                                "Doctor_ID": "D200",
                                "Audit_Date": "2024-08-26",
                                "Created_Date": "2024-07-26"
                            },
                            "Occlusal": {
                                "Status": "Planned",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "General",
                                "Diagnoses": "Cavity",
                                "Notes": "Filling required",
                                "Estimate": "600",
                                "Doctor_ID": "D201",
                                "Audit_Date": "2024-08-27",
                                "Created_Date": "2024-07-27"
                            },
                            "Distal": {
                                "Status": "Completed",
                                "Pre_Auth": "Denied",
                                "Phase": "3",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Root Canal",
                                "Notes": "Treatment finished",
                                "Estimate": "2200",
                                "Doctor_ID": "D202",
                                "Audit_Date": "2024-08-28",
                                "Created_Date": "2024-07-28"
                            },
                            "Buccal": {
                                "Status": "In Progress",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "General",
                                "Diagnoses": "Plaque Buildup",
                                "Notes": "Cleaning ongoing",
                                "Estimate": "300",
                                "Doctor_ID": "D203",
                                "Audit_Date": "2024-08-29",
                                "Created_Date": "2024-07-29"
                            },
                            "Lingual": {
                                "Status": "Planned",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "Orthodontics",
                                "Diagnoses": "Overbite",
                                "Notes": "Braces scheduled",
                                "Estimate": "2500",
                                "Doctor_ID": "D204",
                                "Audit_Date": "2024-08-30",
                                "Created_Date": "2024-07-30"
                            }
                        }
                    },
                    "19": {
                        "Category": "General",
                        "Code": "BR007",
                        "Site": "19",
                        "Suf": {
                            "Mesial": {
                                "Status": "Planned",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Periapical Abscess",
                                "Notes": "Drainage required",
                                "Estimate": "1500",
                                "Doctor_ID": "D205",
                                "Audit_Date": "2024-08-31",
                                "Created_Date": "2024-07-31"
                            },
                            "Occlusal": {
                                "Status": "Completed",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "General",
                                "Diagnoses": "Fracture",
                                "Notes": "Crown installed",
                                "Estimate": "1800",
                                "Doctor_ID": "D206",
                                "Audit_Date": "2024-09-01",
                                "Created_Date": "2024-08-01"
                            },
                            "Distal": {
                                "Status": "In Progress",
                                "Pre_Auth": "Denied",
                                "Phase": "3",
                                "Discipline": "Orthodontics",
                                "Diagnoses": "Spacing",
                                "Notes": "Braces treatment ongoing",
                                "Estimate": "2300",
                                "Doctor_ID": "D207",
                                "Audit_Date": "2024-09-02",
                                "Created_Date": "2024-08-02"
                            },
                            "Buccal": {
                                "Status": "Existing",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "General",
                                "Diagnoses": "Plaque Buildup",
                                "Notes": "Cleaning done",
                                "Estimate": "400",
                                "Doctor_ID": "D208",
                                "Audit_Date": "2024-09-03",
                                "Created_Date": "2024-08-03"
                            },
                            "Lingual": {
                                "Status": "Planned",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Pulpitis",
                                "Notes": "Root canal required",
                                "Estimate": "1800",
                                "Doctor_ID": "D209",
                                "Audit_Date": "2024-09-04",
                                "Created_Date": "2024-08-04"
                            }
                        }
                    },
                    "20": {
                        "Category": "Orthodontics",
                        "Code": "BR008",
                        "Site": "20",
                        "Suf": {
                            "Mesial": {
                                "Status": "Completed",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "General",
                                "Diagnoses": "Plaque Buildup",
                                "Notes": "Cleaning done",
                                "Estimate": "350",
                                "Doctor_ID": "D210",
                                "Audit_Date": "2024-09-05",
                                "Created_Date": "2024-08-05"
                            },
                            "Occlusal": {
                                "Status": "In Progress",
                                "Pre_Auth": "Denied",
                                "Phase": "2",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Overjet",
                                "Notes": "Braces treatment ongoing",
                                "Estimate": "2000",
                                "Doctor_ID": "D211",
                                "Audit_Date": "2024-09-06",
                                "Created_Date": "2024-08-06"
                            },
                            "Distal": {
                                "Status": "Planned",
                                "Pre_Auth": "Approved",
                                "Phase": "3",
                                "Discipline": "General",
                                "Diagnoses": "Cavity",
                                "Notes": "Filling scheduled",
                                "Estimate": "700",
                                "Doctor_ID": "D212",
                                "Audit_Date": "2024-09-07",
                                "Created_Date": "2024-08-07"
                            },
                            "Buccal": {
                                "Status": "Existing",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "Orthodontics",
                                "Diagnoses": "Misalignment",
                                "Notes": "Braces installed",
                                "Estimate": "2400",
                                "Doctor_ID": "D213",
                                "Audit_Date": "2024-09-08",
                                "Created_Date": "2024-08-08"
                            },
                            "Lingual": {
                                "Status": "Completed",
                                "Pre_Auth": "Denied",
                                "Phase": "2",
                                "Discipline": "General",
                                "Diagnoses": "Gingivitis",
                                "Notes": "Deep cleaning done",
                                "Estimate": "450",
                                "Doctor_ID": "D214",
                                "Audit_Date": "2024-09-09",
                                "Created_Date": "2024-08-09"
                            }
                        }
                    },
                    "21": {
                        "Category": "Endodontics",
                        "Code": "BR009",
                        "Site": "21",
                        "Suf": {
                            "Mesial": {
                                "Status": "In Progress",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "General",
                                "Diagnoses": "Cavity",
                                "Notes": "Filling ongoing",
                                "Estimate": "500",
                                "Doctor_ID": "D215",
                                "Audit_Date": "2024-09-10",
                                "Created_Date": "2024-08-10"
                            },
                            "Occlusal": {
                                "Status": "Completed",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Pulpitis",
                                "Notes": "Root canal finished",
                                "Estimate": "1500",
                                "Doctor_ID": "D216",
                                "Audit_Date": "2024-09-11",
                                "Created_Date": "2024-08-11"
                            },
                            "Distal": {
                                "Status": "Planned",
                                "Pre_Auth": "Approved",
                                "Phase": "3",
                                "Discipline": "General",
                                "Diagnoses": "Plaque Buildup",
                                "Notes": "Routine cleaning scheduled",
                                "Estimate": "300",
                                "Doctor_ID": "D217",
                                "Audit_Date": "2024-09-12",
                                "Created_Date": "2024-08-12"
                            },
                            "Buccal": {
                                "Status": "Existing",
                                "Pre_Auth": "Denied",
                                "Phase": "1",
                                "Discipline": "Orthodontics",
                                "Diagnoses": "Crowding",
                                "Notes": "Braces already installed",
                                "Estimate": "2500",
                                "Doctor_ID": "D218",
                                "Audit_Date": "2024-09-13",
                                "Created_Date": "2024-08-13"
                            },
                            "Lingual": {
                                "Status": "Planned",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Periapical Abscess",
                                "Notes": "Treatment scheduled",
                                "Estimate": "1800",
                                "Doctor_ID": "D219",
                                "Audit_Date": "2024-09-14",
                                "Created_Date": "2024-08-14"
                            }
                        }
                    },
                    "22": {
        "Category": "General",
        "Code": "BR010",
        "Site": "22",
        "Suf": {
            "Mesial": {
                "Status": "Planned",
                "Pre_Auth": "Approved",
                "Phase": "1",
                "Discipline": "Endodontics",
                "Diagnoses": "Cavity",
                "Notes": "Filling scheduled",
                "Estimate": "700",
                "Doctor_ID": "D220",
                "Audit_Date": "2024-09-15",
                "Created_Date": "2024-08-15"
            },
            "Occlusal": {
                "Status": "Completed",
                "Pre_Auth": "Denied",
                "Phase": "2",
                "Discipline": "Orthodontics",
                "Diagnoses": "Overjet",
                "Notes": "Braces treatment finished",
                "Estimate": "2400",
                "Doctor_ID": "D221",
                "Audit_Date": "2024-09-16",
                "Created_Date": "2024-08-16"
            },
            "Distal": {
                "Status": "In Progress",
                "Pre_Auth": "Approved",
                "Phase": "3",
                "Discipline": "General",
                "Diagnoses": "Plaque Buildup",
                "Notes": "Routine cleaning ongoing",
                "Estimate": "350",
                "Doctor_ID": "D222",
                "Audit_Date": "2024-09-17",
                "Created_Date": "2024-08-17"
            },
            "Buccal": {
                "Status": "Existing",
                "Pre_Auth": "Approved",
                "Phase": "1",
                "Discipline": "General",
                "Diagnoses": "Gingivitis",
                "Notes": "Regular cleaning completed",
                "Estimate": "500",
                "Doctor_ID": "D223",
                "Audit_Date": "2024-09-18",
                "Created_Date": "2024-08-18"
            },
            "Lingual": {
                "Status": "Planned",
                "Pre_Auth": "Approved",
                "Phase": "2",
                "Discipline": "Endodontics",
                "Diagnoses": "Root Canal",
                "Notes": "Procedure scheduled",
                "Estimate": "1800",
                "Doctor_ID": "D224",
                "Audit_Date": "2024-09-19",
                "Created_Date": "2024-08-19"
            }
        }
                    },
                    "23": {
                        "Category": "Endodontics",
                        "Code": "BR011",
                        "Site": "23",
                        "Suf": {
                            "Mesial": {
                                "Status": "In Progress",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "General",
                                "Diagnoses": "Plaque Buildup",
                                "Notes": "Routine cleaning ongoing",
                                "Estimate": "300",
                                "Doctor_ID": "D225",
                                "Audit_Date": "2024-09-20",
                                "Created_Date": "2024-08-20"
                            },
                            "Occlusal": {
                                "Status": "Planned",
                                "Pre_Auth": "Denied",
                                "Phase": "2",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Pulpitis",
                                "Notes": "Root canal required",
                                "Estimate": "1600",
                                "Doctor_ID": "D226",
                                "Audit_Date": "2024-09-21",
                                "Created_Date": "2024-08-21"
                            },
                            "Distal": {
                                "Status": "Completed",
                                "Pre_Auth": "Approved",
                                "Phase": "3",
                                "Discipline": "General",
                                "Diagnoses": "Cavity",
                                "Notes": "Filling done",
                                "Estimate": "700",
                                "Doctor_ID": "D227",
                                "Audit_Date": "2024-09-22",
                                "Created_Date": "2024-08-22"
                            },
                            "Buccal": {
                                "Status": "Existing",
                                "Pre_Auth": "Denied",
                                "Phase": "1",
                                "Discipline": "General",
                                "Diagnoses": "Plaque Buildup",
                                "Notes": "Regular cleaning completed",
                                "Estimate": "400",
                                "Doctor_ID": "D228",
                                "Audit_Date": "2024-09-23",
                                "Created_Date": "2024-08-23"
                            },
                            "Lingual": {
                                "Status": "Planned",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "Orthodontics",
                                "Diagnoses": "Crowding",
                                "Notes": "Braces scheduled",
                                "Estimate": "2500",
                                "Doctor_ID": "D229",
                                "Audit_Date": "2024-09-24",
                                "Created_Date": "2024-08-24"
                            }
                        }
                    },
                    "24": {
                        "Category": "Orthodontics",
                        "Code": "BR012",
                        "Site": "24",
                        "Suf": {
                            "Mesial": {
                                "Status": "Completed",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Pulpitis",
                                "Notes": "Root canal done",
                                "Estimate": "1500",
                                "Doctor_ID": "D230",
                                "Audit_Date": "2024-09-25",
                                "Created_Date": "2024-08-25"
                            },
                            "Occlusal": {
                                "Status": "Planned",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "General",
                                "Diagnoses": "Cavity",
                                "Notes": "Filling scheduled",
                                "Estimate": "600",
                                "Doctor_ID": "D231",
                                "Audit_Date": "2024-09-26",
                                "Created_Date": "2024-08-26"
                            },
                            "Distal": {
                                "Status": "In Progress",
                                "Pre_Auth": "Denied",
                                "Phase": "3",
                                "Discipline": "Orthodontics",
                                "Diagnoses": "Misalignment",
                                "Notes": "Braces treatment ongoing",
                                "Estimate": "2500",
                                "Doctor_ID": "D232",
                                "Audit_Date": "2024-09-27",
                                "Created_Date": "2024-08-27"
                            },
                            "Buccal": {
                                "Status": "Existing",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "General",
                                "Diagnoses": "Plaque Buildup",
                                "Notes": "Cleaning done",
                                "Estimate": "450",
                                "Doctor_ID": "D233",
                                "Audit_Date": "2024-09-28",
                                "Created_Date": "2024-08-28"
                            },
                            "Lingual": {
                                "Status": "Completed",
                                "Pre_Auth": "Denied",
                                "Phase": "2",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Overjet",
                                "Notes": "Braces treatment finished",
                                "Estimate": "2000",
                                "Doctor_ID": "D234",
                                "Audit_Date": "2024-09-29",
                                "Created_Date": "2024-08-29"
                            }
                        }
                    },
                    "25": {
                        "Category": "Endodontics",
                        "Code": "BR013",
                        "Site": "25",
                        "Suf": {
                            "Mesial": {
                                "Status": "In Progress",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "General",
                                "Diagnoses": "Cavity",
                                "Notes": "Filling ongoing",
                                "Estimate": "600",
                                "Doctor_ID": "D235",
                                "Audit_Date": "2024-09-30",
                                "Created_Date": "2024-08-30"
                            },
                            "Occlusal": {
                                "Status": "Completed",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Root Canal",
                                "Notes": "Procedure finished",
                                "Estimate": "1800",
                                "Doctor_ID": "D236",
                                "Audit_Date": "2024-10-01",
                                "Created_Date": "2024-08-31"
                            },
                            "Distal": {
                                "Status": "Planned",
                                "Pre_Auth": "Denied",
                                "Phase": "3",
                                "Discipline": "Orthodontics",
                                "Diagnoses": "Overbite",
                                "Notes": "Braces treatment planned",
                                "Estimate": "2200",
                                "Doctor_ID": "D237",
                                "Audit_Date": "2024-10-02",
                                "Created_Date": "2024-09-01"
                            },
                            "Buccal": {
                                "Status": "Existing",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "General",
                                "Diagnoses": "Plaque Buildup",
                                "Notes": "Cleaning completed",
                                "Estimate": "400",
                                "Doctor_ID": "D238",
                                "Audit_Date": "2024-10-03",
                                "Created_Date": "2024-09-02"
                            },
                            "Lingual": {
                                "Status": "In Progress",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Gingivitis",
                                "Notes": "Treatment ongoing",
                                "Estimate": "600",
                                "Doctor_ID": "D239",
                                "Audit_Date": "2024-10-04",
                                "Created_Date": "2024-09-03"
                            }
                        }
                    },
                    "26": {
                        "Category": "General",
                        "Code": "BR014",
                        "Site": "26",
                        "Suf": {
                            "Mesial": {
                                "Status": "Completed",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Cavity",
                                "Notes": "Filling done",
                                "Estimate": "700",
                                "Doctor_ID": "D240",
                                "Audit_Date": "2024-10-05",
                                "Created_Date": "2024-09-04"
                            },
                            "Occlusal": {
                                "Status": "In Progress",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "Orthodontics",
                                "Diagnoses": "Crowding",
                                "Notes": "Braces treatment ongoing",
                                "Estimate": "2500",
                                "Doctor_ID": "D241",
                                "Audit_Date": "2024-10-06",
                                "Created_Date": "2024-09-05"
                            },
                            "Distal": {
                                "Status": "Planned",
                                "Pre_Auth": "Approved",
                                "Phase": "3",
                                "Discipline": "General",
                                "Diagnoses": "Plaque Buildup",
                                "Notes": "Routine cleaning scheduled",
                                "Estimate": "300",
                                "Doctor_ID": "D242",
                                "Audit_Date": "2024-10-07",
                                "Created_Date": "2024-09-06"
                            },
                            "Buccal": {
                                "Status": "Existing",
                                "Pre_Auth": "Denied",
                                "Phase": "1",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Gingivitis",
                                "Notes": "No immediate action required",
                                "Estimate": "400",
                                "Doctor_ID": "D243",
                                "Audit_Date": "2024-10-08",
                                "Created_Date": "2024-09-07"
                            },
                            "Lingual": {
                                "Status": "In Progress",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "Orthodontics",
                                "Diagnoses": "Overjet",
                                "Notes": "Braces adjustment required",
                                "Estimate": "2300",
                                "Doctor_ID": "D244",
                                "Audit_Date": "2024-10-09",
                                "Created_Date": "2024-09-08"
                            }
                        }
                    },
                    "27": {
                        "Category": "Endodontics",
                        "Code": "BR015",
                        "Site": "27",
                        "Suf": {
                            "Mesial": {
                                "Status": "Planned",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "General",
                                "Diagnoses": "Staining",
                                "Notes": "Whitening scheduled",
                                "Estimate": "900",
                                "Doctor_ID": "D245",
                                "Audit_Date": "2024-10-10",
                                "Created_Date": "2024-09-09"
                            },
                            "Occlusal": {
                                "Status": "In Progress",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Root Canal",
                                "Notes": "Procedure ongoing",
                                "Estimate": "1600",
                                "Doctor_ID": "D246",
                                "Audit_Date": "2024-10-11",
                                "Created_Date": "2024-09-10"
                            },
                            "Distal": {
                                "Status": "Completed",
                                "Pre_Auth": "Denied",
                                "Phase": "3",
                                "Discipline": "General",
                                "Diagnoses": "Cavity",
                                "Notes": "Filling completed",
                                "Estimate": "700",
                                "Doctor_ID": "D247",
                                "Audit_Date": "2024-10-12",
                                "Created_Date": "2024-09-11"
                            },
                            "Buccal": {
                                "Status": "Existing",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "General",
                                "Diagnoses": "Plaque Buildup",
                                "Notes": "Routine cleaning completed",
                                "Estimate": "450",
                                "Doctor_ID": "D248",
                                "Audit_Date": "2024-10-13",
                                "Created_Date": "2024-09-12"
                            },
                            "Lingual": {
                                "Status": "Planned",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "Orthodontics",
                                "Diagnoses": "Crowding",
                                "Notes": "Braces installation scheduled",
                                "Estimate": "2400",
                                "Doctor_ID": "D249",
                                "Audit_Date": "2024-10-14",
                                "Created_Date": "2024-09-13"
                            }
                        }
                    },
                    "28": {
                        "Category": "General",
                        "Code": "BR016",
                        "Site": "28",
                        "Suf": {
                            "Mesial": {
                                "Status": "Completed",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Cavity",
                                "Notes": "Filling done",
                                "Estimate": "600",
                                "Doctor_ID": "D250",
                                "Audit_Date": "2024-10-15",
                                "Created_Date": "2024-09-14"
                            },
                            "Occlusal": {
                                "Status": "Planned",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "Orthodontics",
                                "Diagnoses": "Overbite",
                                "Notes": "Braces treatment scheduled",
                                "Estimate": "2300",
                                "Doctor_ID": "D251",
                                "Audit_Date": "2024-10-16",
                                "Created_Date": "2024-09-15"
                            },
                            "Distal": {
                                "Status": "In Progress",
                                "Pre_Auth": "Denied",
                                "Phase": "3",
                                "Discipline": "General",
                                "Diagnoses": "Plaque Buildup",
                                "Notes": "Routine cleaning ongoing",
                                "Estimate": "400",
                                "Doctor_ID": "D252",
                                "Audit_Date": "2024-10-17",
                                "Created_Date": "2024-09-16"
                            },
                            "Buccal": {
                                "Status": "Existing",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Gingivitis",
                                "Notes": "Routine treatment completed",
                                "Estimate": "300",
                                "Doctor_ID": "D253",
                                "Audit_Date": "2024-10-18",
                                "Created_Date": "2024-09-17"
                            },
                            "Lingual": {
                                "Status": "Planned",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Pulpitis",
                                "Notes": "Root canal scheduled",
                                "Estimate": "1800",
                                "Doctor_ID": "D254",
                                "Audit_Date": "2024-10-19",
                                "Created_Date": "2024-09-18"
                            }
                        }
                    },
                    "29": {
                        "Category": "Endodontics",
                        "Code": "BR017",
                        "Site": "29",
                        "Suf": {
                            "Mesial": {
                                "Status": "Planned",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "General",
                                "Diagnoses": "Cavity",
                                "Notes": "Filling scheduled",
                                "Estimate": "700",
                                "Doctor_ID": "D255",
                                "Audit_Date": "2024-10-20",
                                "Created_Date": "2024-09-19"
                            },
                            "Occlusal": {
                                "Status": "In Progress",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Root Canal",
                                "Notes": "Procedure ongoing",
                                "Estimate": "1900",
                                "Doctor_ID": "D256",
                                "Audit_Date": "2024-10-21",
                                "Created_Date": "2024-09-20"
                            },
                            "Distal": {
                                "Status": "Completed",
                                "Pre_Auth": "Denied",
                                "Phase": "3",
                                "Discipline": "General",
                                "Diagnoses": "Cavity",
                                "Notes": "Filling done",
                                "Estimate": "600",
                                "Doctor_ID": "D257",
                                "Audit_Date": "2024-10-22",
                                "Created_Date": "2024-09-21"
                            },
                            "Buccal": {
                                "Status": "Existing",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "General",
                                "Diagnoses": "Plaque Buildup",
                                "Notes": "Routine cleaning completed",
                                "Estimate": "450",
                                "Doctor_ID": "D258",
                                "Audit_Date": "2024-10-23",
                                "Created_Date": "2024-09-22"
                            },
                            "Lingual": {
                                "Status": "Planned",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "Orthodontics",
                                "Diagnoses": "Crowding",
                                "Notes": "Braces treatment scheduled",
                                "Estimate": "2500",
                                "Doctor_ID": "D259",
                                "Audit_Date": "2024-10-24",
                                "Created_Date": "2024-09-23"
                            }
                        }
                    },
                    "30": {
                        "Category": "General",
                        "Code": "BR018",
                        "Site": "30",
                        "Suf": {
                            "Mesial": {
                                "Status": "In Progress",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Cavity",
                                "Notes": "Filling ongoing",
                                "Estimate": "800",
                                "Doctor_ID": "D260",
                                "Audit_Date": "2024-10-25",
                                "Created_Date": "2024-09-24"
                            },
                            "Occlusal": {
                                "Status": "Completed",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "General",
                                "Diagnoses": "Cavity",
                                "Notes": "Filling completed",
                                "Estimate": "600",
                                "Doctor_ID": "D261",
                                "Audit_Date": "2024-10-26",
                                "Created_Date": "2024-09-25"
                            },
                            "Distal": {
                                "Status": "Planned",
                                "Pre_Auth": "Denied",
                                "Phase": "3",
                                "Discipline": "Orthodontics",
                                "Diagnoses": "Overbite",
                                "Notes": "Braces consultation scheduled",
                                "Estimate": "2300",
                                "Doctor_ID": "D262",
                                "Audit_Date": "2024-10-27",
                                "Created_Date": "2024-09-26"
                            },
                            "Buccal": {
                                "Status": "Existing",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "General",
                                "Diagnoses": "Gingivitis",
                                "Notes": "Routine treatment completed",
                                "Estimate": "350",
                                "Doctor_ID": "D263",
                                "Audit_Date": "2024-10-28",
                                "Created_Date": "2024-09-27"
                            },
                            "Lingual": {
                                "Status": "In Progress",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Pulpitis",
                                "Notes": "Root canal ongoing",
                                "Estimate": "1800",
                                "Doctor_ID": "D264",
                                "Audit_Date": "2024-10-29",
                                "Created_Date": "2024-09-28"
                            }
                        }
                    },
                    "31": {
                        "Category": "Endodontics",
                        "Code": "BR019",
                        "Site": "31",
                        "Suf": {
                            "Mesial": {
                                "Status": "Completed",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "General",
                                "Diagnoses": "Cavity",
                                "Notes": "Filling done",
                                "Estimate": "600",
                                "Doctor_ID": "D265",
                                "Audit_Date": "2024-10-30",
                                "Created_Date": "2024-09-29"
                            },
                            "Occlusal": {
                                "Status": "Planned",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "Orthodontics",
                                "Diagnoses": "Crowding",
                                "Notes": "Braces installation scheduled",
                                "Estimate": "2500",
                                "Doctor_ID": "D266",
                                "Audit_Date": "2024-10-31",
                                "Created_Date": "2024-09-30"
                            },
                            "Distal": {
                                "Status": "In Progress",
                                "Pre_Auth": "Denied",
                                "Phase": "3",
                                "Discipline": "General",
                                "Diagnoses": "Plaque Buildup",
                                "Notes": "Routine cleaning ongoing",
                                "Estimate": "400",
                                "Doctor_ID": "D267",
                                "Audit_Date": "2024-11-01",
                                "Created_Date": "2024-10-01"
                            },
                            "Buccal": {
                                "Status": "Existing",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Gingivitis",
                                "Notes": "Routine treatment completed",
                                "Estimate": "350",
                                "Doctor_ID": "D268",
                                "Audit_Date": "2024-11-02",
                                "Created_Date": "2024-10-02"
                            },
                            "Lingual": {
                                "Status": "Planned",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Pulpitis",
                                "Notes": "Root canal scheduled",
                                "Estimate": "1800",
                                "Doctor_ID": "D269",
                                "Audit_Date": "2024-11-03",
                                "Created_Date": "2024-10-03"
                            }
                        }
                    },
                    "32": {
                        "Category": "General",
                        "Code": "BR020",
                        "Site": "32",
                        "Suf": {
                            "Mesial": {
                                "Status": "Completed",
                                "Pre_Auth": "Approved",
                                "Phase": "1",
                                "Discipline": "General",
                                "Diagnoses": "Cavity",
                                "Notes": "Filling done",
                                "Estimate": "650",
                                "Doctor_ID": "D270",
                                "Audit_Date": "2024-11-04",
                                "Created_Date": "2024-10-04"
                            },
                            "Occlusal": {
                                "Status": "In Progress",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "Orthodontics",
                                "Diagnoses": "Overbite",
                                "Notes": "Braces adjustment ongoing",
                                "Estimate": "2400",
                                "Doctor_ID": "D271",
                                "Audit_Date": "2024-11-05",
                                "Created_Date": "2024-10-05"
                            },
                            "Distal": {
                                "Status": "Planned",
                                "Pre_Auth": "Approved",
                                "Phase": "3",
                                "Discipline": "General",
                                "Diagnoses": "Plaque Buildup",
                                "Notes": "Routine cleaning scheduled",
                                "Estimate": "300",
                                "Doctor_ID": "D272",
                                "Audit_Date": "2024-11-06",
                                "Created_Date": "2024-10-06"
                            },
                            "Buccal": {
                                "Status": "Existing",
                                "Pre_Auth": "Denied",
                                "Phase": "1",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Gingivitis",
                                "Notes": "No immediate action required",
                                "Estimate": "350",
                                "Doctor_ID": "D273",
                                "Audit_Date": "2024-11-07",
                                "Created_Date": "2024-10-07"
                            },
                            "Lingual": {
                                "Status": "In Progress",
                                "Pre_Auth": "Approved",
                                "Phase": "2",
                                "Discipline": "Endodontics",
                                "Diagnoses": "Pulpitis",
                                "Notes": "Root canal ongoing",
                                "Estimate": "1800",
                                "Doctor_ID": "D274",
                                "Audit_Date": "2024-11-08",
                                "Created_Date": "2024-10-08"
                            }
                        }
                    }

            }

        }
    },

]


export default Data;