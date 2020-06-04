## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false|
|email|integer|null: false|
|password|integer|null: false|

### Association
- has_many :groups
- has_many :messages

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|integer|null: false|


### Association
- has_many :users
- has_many :messages

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user