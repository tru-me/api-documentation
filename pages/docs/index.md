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

### `GET /v1/user`

Retrieves a user information by ID or Email.

#### Request

**URL**: `/v1/user`  
**Method**: `GET`  
**Authentication**: Required

#### Parameters

- **`first_name`** (string, Required):  
  - **Description**: The user's first name.

- **`last_name`** (string, Required):  
  - **Description**: The user's last name.

- **`email`** (string, Required):  
  - **Description**: The user's email.

- **`date_of_birth`** (isodate, Required):  
  - **Description**: User's date of birth.

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
			"barcode": "TU2Q6F72"
		},
		{
			"sample_collection_date": "1098-10-10T00:00:00",
			"registration_date": "1098-10-10T00:00:00",
			"in_lab_date": "1098-10-15T00:00:00",
			"processed_date": "1098-10-16T00:00:00",
			"barcode": "TU33NQ34"
		}
	]
}
```

&nbsp;
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
  - **Description**: User's date of birth.

- **`allow_trume_login`** (boolean, Optional): 
  - **Description**: If true, dispatches an email for TruMe password creation.


#### Example Request

```bash
curl -X GET "https://<ENVIRONMENT_URL>/v1/user" \
-H "App-Key: YOUR_TOKEN"
```

#### Response

```json
{
	"user_id": "PvRoVxxiJ2gul3qLwKOVaJ0HCNs1"
}
```


&nbsp;
### `GET /v1/results`

Retrieves a user results by user Id or Email.

#### Request

**URL**: `/v1/results`  
**Method**: `GET`  
**Authentication**: Required

#### Parameters

- **`id`** (string, Required):  
  - **Description**: The user ID.

- **`email`** (string, Required):  
  - **Description**: The user email.

#### Example Request

```bash
curl -X GET "https://<ENVIRONMENT_URL>/v1/results?id=PvRoVxxiJ2gul3qLwKOVaJ0HCNs1" \
-H "App-Key: YOUR_TOKEN"
```

#### Response

```json
{
	"results": [
		{
			"biological_age": 30.0,
			"collection_date": "2024-09-24T20:37:24.218933",
			"chronological_age": 113.95,
			"kit_bar_code": "TEST",
			"share_link": "https://<APP_ENVIRONMENT_URL>/share/xtNvaoS11vcyP"
		},
		{
			"biological_age": 40.0,
			"collection_date": "2024-09-25T15:57:21.851656",
			"chronological_age": 113.95,
			"kit_bar_code": "TEST2",
			"share_link": "https://<APP_ENVIRONMENT_URL>/share/VaRwaoS11vcyP"
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

