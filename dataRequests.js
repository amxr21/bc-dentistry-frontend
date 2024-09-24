const DataRequestsData = [
    {
    "requestId": 1,
    "type": "on-chain",
    "fileType": "DICOM",
    "description": "Request for DICOM files of MRI scans.",
    "requester": "Doctor A",
    "status": "pending",
    "data": {
        "fileName": "mri_scan.dcm",
        "fileUrl": "https://example.com/files/mri_scan.dcm",
        "fileSize": "20MB"
    }
    },
    {
    "requestId": 2,
    "type": "on-chain",
    "fileType": "Radiograph",
    "description": "Request for radiograph images for patient evaluation.",
    "requester": "Doctor B",
    "status": "completed",
    "data": {
        "fileName": "radiograph_xray.jpg",
        "fileUrl": "https://example.com/files/radiograph_xray.jpg",
        "fileSize": "5MB"
    }
    },
    {
    "requestId": 3,
    "type": "off-chain",
    "dataType": "Dental Record",
    "description": "Request for dental records stored on the blockchain.",
    "requester": "Dentist C",
    "status": "processing",
    "data": {
        "recordHash": "0xabc123...",
        "blockchain": "Ethereum",
        "timestamp": "2024-09-23T10:00:00Z",
        "patientId": "patient_123",
        "record": {
        "treatmentHistory": [
            {
            "date": "2023-05-12",
            "procedure": "Root canal",
            "dentist": "Dr. Smith"
            },
            {
            "date": "2024-01-20",
            "procedure": "Teeth cleaning",
            "dentist": "Dr. Jane"
            }
        ],
        "allergies": ["Penicillin"],
        "medications": ["Ibuprofen"]
        }
    }
    },
    {
    "requestId": 4,
    "type": "off-chain",
    "dataType": "Medical Record",
    "description": "Request for general medical records stored on the blockchain.",
    "requester": "Doctor D",
    "status": "completed",
    "data": {
        "recordHash": "0xdef456...",
        "blockchain": "Hyperledger",
        "timestamp": "2024-09-21T14:30:00Z",
        "patientId": "patient_456",
        "record": {
        "diagnosis": "Hypertension",
        "treatmentHistory": [
            {
            "date": "2022-12-05",
            "treatment": "Blood pressure medication prescribed",
            "doctor": "Dr. Williams"
            }
        ],
        "allergies": ["Sulfa drugs"],
        "medications": ["Lisinopril"]
        }
    }
    }
]


export default DataRequestsData;