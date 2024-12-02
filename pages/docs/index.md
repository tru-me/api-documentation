# API Documentation

## Authentication

All requests to the API require authentication in the `App-Key` header.

```bash
App-Key: YOUR_TOKEN
```

**Contact Trumelabs to provide your Token.**

## Hosts
**Production**: `https://api.trumelabs.com`  
**Staging**: `https://api-staging.trumelabs.com`  

## Endpoints

### `POST /v1/user`

Creates a new TruMe user.

#### Request

**URL**: `/v1/user`  
**Method**: `POST`  
**Authentication**: Required

#### Parameters

- **`first_name`** (string): 
  - **Description**: The user's first name.

- **`last_name`** (string): 
  - **Description**: The user's last name.

- **`email`** (string): 
  - **Description**: The user's email.

- **`date_of_birth`** (isodate): 
  - **Description**: User's date of birth. e.g: 1994-06-17

- **`allow_trume_login`** (boolean, Optional): 
  - **Description**: If true, dispatches an email for TruMe password creation.

- **`biological_sex`** (string, Optional): 
  - **Description**: ['Male', 'Female', 'Prefer not to answer']

- **`gender`** (string, Optional): 
  - **Description**: ['Male', 'Female', 'Prefer not to answer']

- **`country`** (string, Optional): 
  - **Description**: e.g: United States Of America

- **`ethnicity`** (string, Optional): 
  - **Description**: ['White', 'Hispanic and Latino', 'Black / African American', 'Asian', 'American Indian or Alaska Native', 'Native Hawaiian or Other Pacific Islander', 'Other']

#### Example Request

```bash
curl --request POST \
  --url 'http://<ENVIRONMENT_URL>/v1/user?id=vd7KETc6UHuGbeMRv9EnFdEh0mfD' \
  --header 'App-Key: YOUR-TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
	"first_name": "John",
	"last_name": "Doe",
	"email": "johndoe@mail.com",
	"date_of_birth": "1994-06-17",
	"allow_trume_login": "false",
	"biological_sex": "Male",
	"country": "United States Of America",
	"ethnicity": "White"
}'
```

#### Response

```json
{
	"user_id": "PvRoVxxiJ2gul3qLwKOVaJ0HCNs1"
}
```

&nbsp;
### `GET /v1/user`

Retrieves a user information by ID or Email.

#### Request

**URL**: `/v1/user`  
**Method**: `GET`  
**Authentication**: Required

#### Parameters

- **`id`** (string, Required if not email):  
  - **Description**: The user's id.

- **`email`** (string, Required if not id):  
  - **Description**: The user's email.

#### Example Request

```bash
curl -X GET "https://<ENVIRONMENT_URL>/v1/user?id=PvRoVxxiJ2gul3qLwKOVaJ0HCNs1" \
-H "App-Key: YOUR_TOKEN"
```

#### Response

```json
{
	"first_name": "Test",
	"last_name": "Testing",
	"email": "trumelabs@gmail.com",
	"phone": "11234214422",
	"date_of_birth": "1910-10-10T00:00:00",
	"kits": [
		{
			"sample_collection_date": "2024-08-09T02:11:59.368403",
			"registration_date": "2024-08-09T02:11:59.368403",
			"in_lab_date": "2024-08-011T02:11:59.368403",
			"processed_date": "2024-08-15T02:11:59.368403",
			"barcode": "TU2Q6F72",
			"health_status": {
				"alcohol_consumption": "0",
				"waking_up_condition": "Yes",
				"date": "2024-11-27T00:00:00",
				"medicine_consumption": "Yes",
				"trouble_sleeping": "No",
				"height_feet": 5.0,
				"has_diabetes": "Yes",
				"sleep_hours": "8",
				"weight": 160.0,
				"has_cancer": "No",
				"physical_activity_days": "3",
				"supplement_consumption": "Vitamin D",
				"overall_health": "Good",
				"id": 12,
				"coffee_consumption": "Yes",
				"mental_health": "Fair",
				"user_id": null,
				"kit_id": 14,
				"tobacco_consumption": "No",
				"social_life": "I'd rather not say",
				"height_inches": 70.0,
				"stress": "Not at all"
			}
		},
		{
			"sample_collection_date": "1098-10-10T00:00:00",
			"registration_date": "1098-10-10T00:00:00",
			"in_lab_date": "1098-10-15T00:00:00",
			"processed_date": "1098-10-16T00:00:00",
			"barcode": "TU33NQ34",
			"health_status": {
				"alcohol_consumption": "0",
				"waking_up_condition": "Yes",
				"date": "2024-11-27T00:00:00",
				"medicine_consumption": "Yes",
				"trouble_sleeping": "No",
				"height_feet": 5.0,
				"has_diabetes": "Yes",
				"sleep_hours": "8",
				"weight": 160.0,
				"has_cancer": "No",
				"physical_activity_days": "3",
				"supplement_consumption": "Vitamin D",
				"overall_health": "Good",
				"id": 12,
				"coffee_consumption": "Yes",
				"mental_health": "Fair",
				"user_id": null,
				"kit_id": 14,
				"tobacco_consumption": "No",
				"social_life": "I'd rather not say",
				"height_inches": 70.0,
				"stress": "Not at all"
			}
		}
	]
}
```

&nbsp;
### `POST /v1/kits` (Only staging yet)

Creates a new kit.

*IMPORTANT: Apart from barcode, user_id, and registered_at the remaining parameters represent patient data linked to the kit. If this information is not available at the moment, you can update it later using the PATCH endpoint.*

*The **barcode**, also referred to as the kit number, must adhere to the format AAA-XXXXX. The first three characters should be letters representing the company name, followed by a combination of letters and/or numbers of any length.*

#### Request

**URL**: `/v1/kits`  
**Method**: `POST`  
**Authentication**: Required

#### Parameters

*The patient data parameters are: height_feet, height_inches, weight, overall_health, mental_health, social_life, stress, has_cancer, has_diabetes, medicine_consumption, supplement_consumption, coffee_consumption, tobacco_consumption, waking_up_condition, trouble_sleeping, alcohol_consumption, sleep_hours, physical_activity_days*

- **`barcode`** (string, Required): 
  - **Description**: The kit number/barcode.

- **`user_id`** (string, Required): 
  - **Description**: The user's id.

- **`registered_at`** (datetime, Optional):
	- **Description**: e.g: 2024-11-27T10:00:00

- **`height_feet`** (float, Optional)

- **`height_inches`** (float, Optional)

- **`weight`** (float, Optional)

- **`overall_health`** (string, Optional):
	- **Description**: ['Fair', 'Excellent', 'Good', 'Poor']

- **`mental_health`** (string, Optional):
	- **Description**: ['Fair', 'Excellent', 'Good', 'Poor']

- **`social_life`** (string, Optional):
	- **Description**: ['Yes', 'No', "I'd rather not say"]

- **`stress`** (string, Optional):
	- **Description**: ['A little stressed', 'Somewhat stressed', 'Really stressed', 'Not at all', 'Extremely stressed']

- **`has_cancer`** (string, Optional):
	- **Description**: ['Yes', 'No', "I'd rather not say"]

- **`has_diabetes`** (string, Optional):
	- **Description**: ['Yes', 'No', "I'd rather not say"]

- **`medicine_consumption`** (string, Optional):
	- **Description**: ['Yes', 'No']

- **`supplement_consumption`** (string, Optional):
	- **Description**: e.g: Vitamin D

- **`coffee_consumption`** (string, Optional):
	- **Description**: ['Yes', 'No']

- **`tobacco_consumption`** (string, Optional):
	- **Description**: ['Yes', 'No']

- **`waking_up_condition`** (string, Optional):
	- **Description**: ['Yes', 'No']

- **`trouble_sleeping`** (string, Optional):
	- **Description**: ['Yes', 'No']

- **`alcohol_consumption`** (string, Optional):
	- **Description**: ['0', '1-2', '3-5', '6-9', '+10']

- **`sleep_hours`** (string, Optional):
	- **Description**: ['<5', '6', '7', '8', '9', '>10']

- **`physical_activity_days`** (string, Optional):
	- **Description**: ['0', '1', '2', '3', '4', '5', '+6']

#### Example Request

```bash
curl --request POST \
  --url 'http://<ENVIRONMENT_URL>/v1/kits' \
  --header 'App-Key: YOUR-TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
	"barcode": "TEST1234",
	"user_id": "vd7KETc6UHuGbeMRv9EnFdEh0mfD",
	"height_feet": 5.0,
	"height_inches": 70.0,
	"weight": 160.0,
	"overall_health": "Good",
  "mental_health": "Fair",
	"social_life": "I'\''d rather not say",
	"stress": "Not at all",
	"has_cancer": "No",
	"has_diabetes": "Yes",
	"medicine_consumption": "Yes",
	"supplement_consumption": "Vitamin D",
	"coffee_consumption": "Yes",
	"tobacco_consumption": "No",
	"waking_up_condition": "Yes",
	"trouble_sleeping": "No",
	"alcohol_consumption": "0",
	"sleep_hours": "8",
	"physical_activity_days": "3",
	"registered_at": "2024-11-27T10:00:00"
}'
```

#### Response
Empty

&nbsp;
### `PATCH /v1/kits/{barcode}` (Only staging yet)

Update a kit information (registered_at) and patient data attached to the kit.

#### Request

**URL**: `/v1/kits/{barcode}`  
**Method**: `PATCH`  
**Authentication**: Required

#### Parameters

*The patient data parameters are: height_feet, height_inches, weight, overall_health, mental_health, social_life, stress, has_cancer, has_diabetes, medicine_consumption, supplement_consumption, coffee_consumption, tobacco_consumption, waking_up_condition, trouble_sleeping, alcohol_consumption, sleep_hours, physical_activity_days*

*The **barcode**, also referred to as the kit number, must adhere to the format AAA-XXXXX. The first three characters should be letters representing the company name, followed by a combination of letters and/or numbers of any length.*

- **`registered_at`** (datetime, Optional):
	- **Description**: The datetime when the kit was registered. e.g: 2024-11-27T10:00:00
- **`height_feet`** (float, Optional)

- **`height_inches`** (float, Optional)

- **`weight`** (float, Optional)

- **`overall_health`** (string, Optional):
	- **Description**: ['Fair', 'Excellent', 'Good', 'Poor']

- **`mental_health`** (string, Optional):
	- **Description**: ['Fair', 'Excellent', 'Good', 'Poor']

- **`social_life`** (string, Optional):
	- **Description**: ['Yes', 'No', "I'd rather not say"]

- **`stress`** (string, Optional):
	- **Description**: ['A little stressed', 'Somewhat stressed', 'Really stressed', 'Not at all', 'Extremely stressed']

- **`has_cancer`** (string, Optional):
	- **Description**: ['Yes', 'No', "I'd rather not say"]

- **`has_diabetes`** (string, Optional):
	- **Description**: ['Yes', 'No', "I'd rather not say"]

- **`medicine_consumption`** (string, Optional):
	- **Description**: ['Yes', 'No']

- **`supplement_consumption`** (string, Optional):
	- **Description**: e.g: Vitamin D

- **`coffee_consumption`** (string, Optional):
	- **Description**: ['Yes', 'No']

- **`tobacco_consumption`** (string, Optional):
	- **Description**: ['Yes', 'No']

- **`waking_up_condition`** (string, Optional):
	- **Description**: ['Yes', 'No']

- **`trouble_sleeping`** (string, Optional):
	- **Description**: ['Yes', 'No']

- **`alcohol_consumption`** (string, Optional):
	- **Description**: ['0', '1-2', '3-5', '6-9', '+10']

- **`sleep_hours`** (string, Optional):
	- **Description**: ['<5', '6', '7', '8', '9', '>10']

- **`physical_activity_days`** (string, Optional):
	- **Description**: ['0', '1', '2', '3', '4', '5', '+6']

#### Example Request

```bash
curl --request PATCH \
  --url 'http://<ENVIRONMENT_URL>/v1/kits/TEST123?=' \
  --header 'App-Key: YOUR-TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
	"sleep_hours": "6"
}'
```

#### Response
Empty


&nbsp;
### `GET /v1/results`

Retrieves a user results by user Id or Email.

#### Request

**URL**: `/v1/results`  
**Method**: `GET`  
**Authentication**: Required

#### Parameters

- **`id`** (string, Required if not email):  
  - **Description**: The user ID.

- **`email`** (string, Required if not id):  
  - **Description**: The user email.

#### Example Request

```bash
curl -X GET "https://<ENVIRONMENT_URL>/v1/results?id=PvRoVxxiJ2gul3qLwKOVaJ0HCNs1" \
-H "App-Key: YOUR_TOKEN"
```

#### Response

*The peer_biological_age_score reflects how the user’s performance compares to that of their peers.*

```json
{
	"bio_age_results": [
		{
			"kit_barcode": "TEST1",
			"chronological_age": 30.4,
			"collection_date": "2024-11-11T18:30:12.313127",
			"received_date": null,
			"biological_age": 40.0,
			"processed_date": "2024-11-27T14:21:28.188290",
			"peer_biological_age_score": 50.0,
			"share_link": "http://<APP_ENVIRONMENT_URL>/share/VaRwlU0M08ISJy"
		}
	],
	"genetic_results": [
		{
			"kit_barcode": "TESTSUP",
			"markers": [
				{
					"marker": "rs1801131",
					"risk": "homozygous_normal",
					"gene": "MTHFR",
					"position": "A1298C (Glu429Ala)"
				},
				{
					"marker": "rs1801133",
					"risk": "homozygous_risk",
					"gene": "MTHFR",
					"position": "C677T (Ala222Val)"
				},
				{
					"marker": "rs1805087",
					"risk": "homozygous_risk",
					"gene": "MTR",
					"position": "A2756G (Asp856Gly)"
				},
				{
					"marker": "rs121913578",
					"risk": "homozygous_normal",
					"gene": "MTR",
					"position": "C3518T (Pro1173Leu)"
				},
				{
					"marker": "rs1801394",
					"risk": "heterozygous",
					"gene": "MTRR",
					"position": "A66G (lle49Met)"
				},
				{
					"marker": "rs121918608",
					"risk": "homozygous_normal",
					"gene": "AHCY",
					"position": "Y115C (TYR143CYS)"
				},
				{
					"marker": "rs41301825",
					"risk": "homozygous_normal",
					"gene": "AHCY",
					"position": "G367A (Gly95Arg)"
				},
				{
					"marker": "rs13043752",
					"risk": "homozygous_normal",
					"gene": "AHCY",
					"position": "C112T (Arg10Trp)"
				},
				{
					"marker": "rs4633",
					"risk": "homozygous_risk",
					"gene": "COMT",
					"position": "G304A (Ala52/102Thr)"
				},
				{
					"marker": "rs4680",
					"risk": "homozygous_risk",
					"gene": "COMT",
					"position": "G472A(Val108/158Met)"
				}
			]
		}
	],
	"gender": "Female",
	"ethnicity": "White"
}
```

---

## Error Codes

| Status Code | Description               |
| ----------- | ------------------------- |
| 200         | Success                   |
| 400         | Bad request               |
| 401         | Unauthorized              |
| 404         | Not found                 |
| 500         | Internal server error      |

