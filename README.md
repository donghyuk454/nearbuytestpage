# nearbuy test page
## 프로젝트 설명
nearbuy는 QR코드로 접근한 웹사이트에서 제품을 주문할 수 있는 스마트 자판기입니다.

nearbuy test는 nearbuy의 테스트 버전으로, 학원에서 학생들을 응원하는 메시지가 담긴 포춘쿠키를 제공하는 스마트 자판기입니다.

해당 프로젝트는 스마트 자판기의 frontend와 admin page입니다.

프로젝트에 있는 시연 영상과 참여 영상을 통해 어떻게 사용하였는 지 확인할 수 있습니다.

## 자판기 기능 구조

![image](https://user-images.githubusercontent.com/20418155/173380812-fc41bba8-70d2-4e23-b7ea-cdbbac015b74.png)

## 기능 구현 시 특이사항

아두이노로 제작한 자판기와 통신을 위한 router가 따로 없는 관계로 자판기를 설치할 학원의 공유기를 포트 포워딩해 연결하였으며, 여러 학원에서 자판기를 설치해 사용할 일을 대비하여 frontend와 admin page에서 자판기와 통신하기 위해 사용하는 ip 주소를 admin page에서 수정할 수 있게 하였습니다.

## admin page

![image](https://user-images.githubusercontent.com/20418155/173382061-c6b54fe7-8817-42eb-a909-fa48fd17b401.png)

## admin page 기능

해당 페이지에서 자판기 내에 있는 포춘 쿠키의 갯수를 관리를 합니다.

admin page 에서 갯수를 확인하고, 자판기에 포춘 쿠키를 넣으면 그 만큼 admin page 에서 포춘 쿠키를 추가합니다.

또한, 아두이노로 제작한 자판기의 ip를 수정할 수 있습니다.
