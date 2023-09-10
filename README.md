# Zuri Stage 1

An API service for a lite version of stackoverflow

Live on heroku [othniel-stackoverflow-lite](https://othniel-stackoverflow-lite.herokuapp.com/api/v1)

## End-point: Index

### Method: Get

> ```
> {{baseUrl}}/api/api?slack_name=&track=
> ```

### Body (**raw**)

```json
{
  "slack_name": "",
  "current_day": "Sunday",
  "track": "",
  "github_file_url": "",
  "github_repo_url": "",
  "status_code": 200
}
```
