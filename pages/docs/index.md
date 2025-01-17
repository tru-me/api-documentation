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

### Create user

Creates a new user.

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
  --url 'http://<ENVIRONMENT_URL>/v1/user' \
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
### Update an user

Update an user.

#### Request

**URL**: `/v1/user/{id}`  
**Method**: `PATCH`  
**Authentication**: Required

#### Parameters

- **`first_name`** (string): 
  - **Description**: The user's first name.

- **`last_name`** (string): 
  - **Description**: The user's last name.

- **`date_of_birth`** (isodate): 
  - **Description**: User's date of birth. e.g: 1994-06-17

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
curl --request PATCH \
  --url 'http://<ENVIRONMENT_URL>/v1/user/vd7KETc6UHuGbeMRv9EnFdEh0mfD' \
  --header 'App-Key: YOUR-TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
	"first_name": "John",
	"last_name": "Doe",
	"date_of_birth": "1994-06-17",
	"biological_sex": "Male",
	"country": "United States Of America",
	"ethnicity": "White"
}'
```

#### Response

Empty

&nbsp;
### Retrieve an user

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
	"id": "vd7KETc6UHuGbeMRv9EnFdEh0mfD",
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
### Retrieve unregistered kits

Retrieve all unregistered kit barcodes based on app key brand.

#### Request

**URL**: `/v1/unregistered-kits`  
**Method**: `GET`  
**Authentication**: Required


#### Example Request

```bash
curl --request GET \
  --url 'http://localhost:8080/v1/unregistered-kits?=' \
  --header 'App-Key: 1234' \
  --header 'Content-Type: application/json'
```

#### Response
```
["KIT_BARCODE_1", "KIT_BARCODE_2"]
```

&nbsp;
### Assign a kit to an user

Assign a kit to an user

*IMPORTANT: Apart from barcode, user_id, and registered_at the remaining parameters represent patient data linked to the kit. If this information is not available at the moment, you can update it later using the PATCH endpoint.*

#### Request

**URL**: `/v1/kits/{barcode}/register`  
**Method**: `POST`  
**Authentication**: Required

#### Parameters

*The patient data parameters are: height_feet, height_inches, weight, overall_health, mental_health, social_life, stress, has_cancer, has_diabetes, medicine_consumption, supplement_consumption, coffee_consumption, tobacco_consumption, waking_up_condition, trouble_sleeping, alcohol_consumption, sleep_hours, physical_activity_days*

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
  --url 'http://<ENVIRONMENT_URL>/v1/kits/TEST123/register' \
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
### Update a kit information

Update a kit information (registered_at) and patient data attached to the kit.

#### Request

**URL**: `/v1/kits/{barcode}`  
**Method**: `PATCH`  
**Authentication**: Required

#### Parameters

*The patient data parameters are: height_feet, height_inches, weight, overall_health, mental_health, social_life, stress, has_cancer, has_diabetes, medicine_consumption, supplement_consumption, coffee_consumption, tobacco_consumption, waking_up_condition, trouble_sleeping, alcohol_consumption, sleep_hours, physical_activity_days*

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
  --url 'http://<ENVIRONMENT_URL>/v1/kits/TEST123' \
  --header 'App-Key: YOUR-TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
	"sleep_hours": "6"
}'
```

#### Response
Empty


&nbsp;
### Retrieve user results

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
&nbsp;
### Generate a test kit (Available on Stating only)
Create a kit on staging to validate the endpoints.

#### Request

**URL**: `/v1/generate-kits`  
**Method**: `POST`  
**Authentication**: Required

#### Parameters

- **`barcode`** (string): 
  - **Description**: The barcode/kit_number
- **`test_type`** (string): 
  - **Description**: 1 - Folate, 2 - Age

#### Example Request

```bash
curl --request POST \
  --url 'http://localhost:8080/v1/generate-kits?=' \
  --header 'App-Key: 1234' \
  --header 'Content-Type: application/json' \
  --data '{
	"barcode": "ABC-12345",
	"test_type": 2
}'
```

#### Response
Empty

&nbsp;
### Mock a kit result (Available on Stating only)
This endpoint is to simulate the kit result processing on staging.
Important: This is a random result and we are generating the pdf here. It's just to allow you receive the result by webhook and get the result from API.

#### Request

**URL**: `/v1/mock-kit-result`  
**Method**: `POST`  
**Authentication**: Required

#### Parameters

- **`barcode`** (string): 
  - **Description**: The barcode/kit_number

#### Example Request

```bash
curl --request POST \
  --url 'http://localhost:8080/v1/mock-kit-result?=' \
  --header 'App-Key: 1234' \
  --header 'Content-Type: application/json' \
  --data '{
	"barcode": "ABC-12345"
}'
```

#### Response
Empty

---

## Webhooks
When your app needs information about specific events occurring in a lab, it can subscribe to Trumelabs' webhook topics to receive near-real-time data about these events.

### Headers
```json
{
 "X-Signature": "",
 "X-Topic-Name": "KIT_PROCESSED"
}
```
**X-Signature**: The payload signed with the webhook secret.

**X-Topic-Name**: The name of the topic.

&nbsp;
### Events
**KIT_PROCESSED**: When a kit result is processed

&nbsp;
### Registering a webhook
Register an endpoint to receive webhook event

#### Request

**URL**: `/v1/webhooks`
**Method**: `POST`  
**Authentication**: Required

#### Parameters

- **`endpoint`** (string): 
  - **Description**: The endpoint url (Should be a POST endpoint)
- **`event_name`** (string):
	- **Description**: e.g: KIT_PROCESSED

#### Example Request

```bash
curl --request POST \
  --url 'http://localhost:8080/v1/webhooks?=' \
  --header 'App-Key: <YOUR_API_KEY>' \
  --header 'Content-Type: application/json' \
  --data '{
	"endpoint": "https://<YOUR_HOST>/<YOUR_ENDPOINT>",
	"event_name": "KIT_PROCESSED"
}'
```

#### Response
```json
{
	"secret": "ad8a7aa0f0288e45fa27407ee0983023"
}
```

&nbsp;
### Retrieve my webhooks
Retrieve all registered webhooks 

#### Request

**URL**: `/v1/webhooks`
**Method**: `GET`  
**Authentication**: Required


#### Example Request

```bash
curl --request GET \
  --url 'http://localhost:8080/v1/webhooks' \
  --header 'App-Key: 345' \
  --header 'Content-Type: application/json'
```

#### Response
```json
[
	{
		"endpoint": "http://localhost:8080/test-webhook",
		"secret": "18fa91d5bc680a2c458e6763120d25ed",
		"created_at": "2024-12-24T18:26:00"
	}
]
```

&nbsp;
### Delete a webhook
Delete a webhook

#### Request

**URL**: `/v1/webhooks`
**Method**: `DELETE`  
**Authentication**: Required


#### Example Request

```bash
curl --request DELETE \
  --url 'http://localhost:8080/v1/webhooks?=' \
  --header 'App-Key: 345' \
  --header 'Content-Type: application/json' \
  --data '{
	"endpoint": "http://localhost:3000/test-webhook"
}'
```

&nbsp;
### Events Response
**KIT_PROCESSED**:
```json
{
	"bio_age_results": [
		{
			"kit_barcode": "TEST_WEBHOOK",
			"status": "PROCESSED",
			"chronological_age": 30.52,
			"collection_date": "2024-12-23T21:51:45.608741",
			"received_date": "2024-12-23T21:52:10.428050",
			"biological_age": 30.0,
			"processed_date": "2024-12-23T21:55:27.397521",
			"peer_biological_age_score": 100.0,
			"share_link": "http://localhost:3000/share/xtNvdxgF08ISJy" //If the kit doesn't have an user, the share_link will be null.
		}
	],
	"genetic_results": [
		{
			"kit_barcode": "TEST_WEBHOOK2",
			"status": "PROCESSED",
			"markers": [
				{
					"marker": "rs1801131",
					"risk": "heterozygous",
					"gene": "MTHFR",
					"position": "A1298C (Glu429Ala)"
				},
				{
					"marker": "rs1801133",
					"risk": "homozygous_normal",
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
					"risk": "homozygous_risk",
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
					"risk": "homozygous_normal",
					"gene": "COMT",
					"position": "G304A (Ala52/102Thr)"
				},
				{
					"marker": "rs4680",
					"risk": "homozygous_normal",
					"gene": "COMT",
					"position": "G472A(Val108/158Met)"
				}
			]
		}
	]
}
```

&nbsp;
### Validating a webhook request
Our signature is encoded as base64 to send through the request. Make sure you encode your signature to base64 to compare.
This is an example of how to validate the payload you received:

```python
def create_signature(secret, payload):
   secret_bytes = secret.encode('utf-8')
   payload_bytes = payload.encode('utf-8')
   
   signature = hmac.new(secret_bytes, payload_bytes, hashlib.sha256).digest()
   return base64.b64encode(signature).decode('utf-8')

expected_signature = create_signature(secret, payload)
hmac.compare_digest(expected_signature, received_signature)
```
&nbsp;
### Webhook response
Please send us the status 200 or 201 when you process successfully to avoid retrying the webhook request.


## Error Codes

| Status Code | Description               |
| ----------- | ------------------------- |
| 200         | Success                   |
| 204         | No Content                |
| 400         | Bad request               |
| 401         | Unauthorized              |
| 404         | Not found                 |
| 500         | Internal server error      |

