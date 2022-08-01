# Workout REST API :weight_lifting:

Small rest api example, using typescript, express and nodejs.

## API Reference :bicyclist:

#### Get all workouts

```http
  GET /api/v1/workouts
```

#### Get workout

```http
  GET /api/v1/workouts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of workout to fetch |

#### Create workout

```http
  GET /api/v1/workouts/${workout}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `workout`      | `object` | **Required**. Workout to add |


#### Update workout

```http
  GET /api/v1/workouts/${id}&${workout}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of workout to update |
| `workout`      | `object` | **Required**. Workout to update |


## Feedback :rocket:

If you have any feedback, feel free to create a new issue on this project! 


## Authors :chipmunk:

- [@nhussein11](https://www.github.com/nhussein11)
