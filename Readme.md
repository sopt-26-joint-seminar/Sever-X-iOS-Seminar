### ㅤ

| 메소드 | 경로                                        | 설명      |
| ------ | ------------------------------------------- | --------- |
| GET    | /items | item 전체 조회 |


### ㅤ
## Request Header

```json
{
    "Content-Type": "application/json"
}
```

#### ㅤ
## Response

### < Success >
```json
{
    "status": 200,
    "success": true,
    "message": "item 조회 성공",
    "data" :  [
        {
            "id": 0,
            "name": "고구마는 원래 노랗다",
            "price": 1300,
            "wow": true,
            "delivery": false,
            "fresh": true,
            "basket": false,
            "img": "",
            "bannerimg": "" 
        },
        {
            "id": 1,
            "name": "고구마는 원래 노랗다",
            "price": 1300,
            "wow": true,
            "delivery": false,
            "fresh": true,
            "basket": false,
            "img": "",
            "bannerimg": "" 
        }
    ] 
}
```

#### ㅤ
### < Fail >

- 잘못된 경로

```json
{
    "status": 404,
    "success": false,
    "message": "잘못된 경로입니다."
}
```

- 잘못된 경로

```json
{
    "status": 500,
    "success": false,
    "message": "서버내부에러"
}
```

### ㅤ




### ㅤ

| 메소드 | 경로                                        | 설명      |
| ------ | ------------------------------------------- | --------- |
| GET    | /items/:id | id에 해당하는 item 조회 |


### ㅤ
## Request Header

```json
{
    "Content-Type": "application/json"
}
```

#### ㅤ
## Response

### < Success >
```json
{
    "status": 200,
    "success": true,
    "message": "id에 해당하는 item 조회 성공",
    "data" :  
        {
            "id": 0,
            "name": "고구마는 원래 노랗다",
            "price": 1300,
            "wow": true,
            "delivery": false,
            "fresh": true,
            "basket": false,
            "img": "",
            "bannerimg": "" 
        }
}
```

#### ㅤ
### < Fail >

- 잘못된 경로

```json
{
    "status": 404,
    "success": false,
    "message": "잘못된 경로입니다."
}
```

### ㅤ
### ㅤ




### ㅤ

| 메소드 | 경로                                        | 설명      |
| ------ | ------------------------------------------- | --------- |
| GET    | /items/filter?wow=false?delievery=true?fresh=true | 로켓 프레쉬, 와우, 배송 정보 |


### ㅤ
## Request Header

```json
{
    "Content-Type": "application/json"
}
```

#### ㅤ
## Response

### < Success >
```json
{
    "status": 200,
    "success": true,
    "message": "item 조회 성공",
    "data" : 
    [
         {
            "id": 0,
            "name": "고구마는 원래 노랗다",
            "price": 1300,
            "wow": false,
            "delivery": true,
            "fresh": true,
            "basket": false,
            "img": "",
            "bannerimg": "" 
        },
        {
            "id": 0,
            "name": "고구마는 원래 노랗다",
            "price": 1300,
            "wow": false,
            "delivery": true,
            "fresh": true,
            "basket": false,
            "img": "",
            "bannerimg": "" 
        },
    ]      
}
```

#### ㅤ
### < Fail >

- 잘못된 경로

```json
{
    "status": 404,
    "success": false,
    "message": "잘못된 경로입니다."
}
```

### ㅤ
### ㅤ



### ㅤ

| 메소드 | 경로                                        | 설명      |
| ------ | ------------------------------------------- | --------- |
| GET    | /items/recommand | 추천상품 |


#### ㅤ
## Response

### < Success >
```json
{
    "status": 200,
    "success": true,
    "message": "추천상품 조회 성공",
    "data" :  
    [
        {
            "id": 0,
            "name": "고구마는 원래 노랗다",
            "price": 1300,
            "wow": true,
            "delivery": false,
            "fresh": true,
            "basket": false,
            "img": "",
            "bannerimg": "" 
        },
        {
            "id": 1,
            "name": "고구마는 원래 노랗다",
            "price": 1300,
            "wow": true,
            "delivery": false,
            "fresh": true,
            "basket": false,
            "img": "",
            "bannerimg": "" 
        }
    ] 
        
}
```

#### ㅤ
### < Fail >

- 잘못된 경로

```json
{
    "status": 404,
    "success": false,
    "message": "잘못된 경로입니다."
}
```

### ㅤ
### ㅤ




### ㅤ

| 메소드 | 경로                                        | 설명      |
| ------ | ------------------------------------------- | --------- |
| GET    | /items/preview | Banner 상품 조회 |


#### ㅤ
## Response

### < Success >
```json
{
    "status": 200,
    "success": true,
    "message": "Banner 상품 조회 성공",
    "data" :  
    [
        {
            "id": 0,
            "name": "고구마는 원래 노랗다",
            "price": 1300,
            "wow": true,
            "delivery": false,
            "fresh": true,
            "basket": false,
            "img": "",
            "bannerimg": "" 
        },
        {
            "id": 1,
            "name": "고구마는 원래 노랗다",
            "price": 1300,
            "wow": true,
            "delivery": false,
            "fresh": true,
            "basket": false,
            "img": "",
            "bannerimg": "" 
        }
    ] 
        
}
```

#### ㅤ
### < Fail >

- 잘못된 경로

```json
{
    "status": 404,
    "success": false,
    "message": "잘못된 경로입니다."
}
```

### ㅤ
### ㅤ





### ㅤ

| 메소드 | 경로                                        | 설명      |
| ------ | ------------------------------------------- | --------- |
| GET    | /items/basket | 장바구니 상품 조회 |


#### ㅤ
## Response

### < Success >
```json
{
    "status": 200,
    "success": true,
    "message": "장바구니 상품 조회 성공",
    "data" :  
    [
        {
            "id": 0,
            "name": "고구마는 원래 노랗다",
            "price": 1300,
            "wow": true,
            "delivery": false,
            "fresh": true,
            "basket": true,
            "img": "",
            "bannerimg": "" 
        },
        {
            "id": 1,
            "name": "고구마는 원래 노랗다",
            "price": 1300,
            "wow": true,
            "delivery": false,
            "fresh": true,
            "basket": true,
            "img": "",
            "bannerimg": "" 
        }
    ] 
        
}
```

#### ㅤ
### < Fail >

- 잘못된 경로

```json
{
    "status": 404,
    "success": false,
    "message": "잘못된 경로입니다."
}
```

### ㅤ
### ㅤ






### ㅤ

| 메소드 | 경로                                        | 설명      |
| ------ | ------------------------------------------- | --------- |
| GET    | /search | 인기 검색어 조회 |


#### ㅤ
## Response

### < Success >
```json
{
    "status": 200,
    "success": true,
    "message": "인기 검색어 조회 성공",
    "data" :  
    [
        {
            "name": "고구마"
        },
        {
            "name": "음료수"
        },
        {
            "name": "고추장"
        }
    ] 
        
}
```

#### ㅤ
### < Fail >

- 잘못된 경로

```json
{
    "status": 404,
    "success": false,
    "message": "잘못된 경로입니다."
}
```

### ㅤ
### ㅤ


### 

| 메소드 | 경로                                        | 설명      |
| ------ | ------------------------------------------- | --------- |
| GET    | /items/basket/count | 장바구니 상품 개수 조회 |


#### ㅤ
## Response

### < Success >
```json
{
    "status": 200,
    "success": true,
    "message": "장바구니 상품 개수 조회",
    "data" :  3
}
```

#### ㅤ
### < Fail >

- 잘못된 경로

```json
{
    "status": 404,
    "success": false,
    "message": "잘못된 경로입니다."
}
```

### ㅤ
### ㅤ