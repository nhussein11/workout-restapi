# Workout REST API :weight_lifting:

Small rest api example, using Typescript, Express and Nodejs.

## API Reference :bicyclist:

#### Get all workouts

```http
  GET /api/v1/workouts
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Optional**. Name of workouts to fetch |
| `mode`      | `string` | **Optional**. Mode of workouts to fetch |

To use optional parameters, for example 'mode', you should: /api/v1/workouts?mode=amrap

#### Get workout

```http
  GET /api/v1/workouts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of workout to fetch |

#### Get all records connected to a workout

```http
  GET /api/v1/workouts/${id}/records
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of workout to fetch |

#### Create workout

```http
  POST /api/v1/workouts/${workout}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `workout`      | `object` | **Required**. Workout to add |


#### Update workout

```http
  PATCH /api/v1/workouts/${id}&${workout}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of workout to update |
| `workout`      | `object` | **Required**. Workout to update |

#### Delete workout

```http
  DELETE /api/v1/workouts/${id}&${workout}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of workout to delete |


#### API DOCS :books:
Search: http://localhost:3000/api/v1/docs/{endpoint}

For example: 
```
http://localhost:3000/api/v1/docs/workouts#/Workouts
```
## Feedback :rocket:

If you have any feedback, feel free to create a new issue on this project! 


## Authors :chipmunk:

- [@nhussein11](https://www.github.com/nhussein11)
