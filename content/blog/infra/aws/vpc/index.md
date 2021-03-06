---
title: VPCのまとめ
date: '2020-09-25T00:00:00.000Z'
createdDate: '2020-09-25T00:00:00.000Z'
updatedDate: '2021-05-17T00:00:00.000Z'
description: 'VPCについてまとめてみました。'
group: ''
---

## 概要

VPC: Amazon Virtual Private Cloud

プライベートなネットワークを AWS 内に作成できる。

インターネットゲートウェイ( IGW ) で、インターネットに接続できる。

仮想プライベートゲートウェイ( VGW ) で、Direct Connect や VPN 経由でインターネットに出ることなく各拠点のネットワークに接続することが可能。

ネットワーク空間を構築する際は、可能な限り大きなサイズ(/16)で作成したほうが良い。

確保した空間が小さく、IP アドレスが不足した場合、あとから拡張するのは困難。

## IP アドレス（CIDR ブロック）

IP アドレスは、クラス A(10.0.0.0~10.255.255.255), クラス B(172.16.0.0~172.31.255.255), クラス C(192.168.0.0~192.168.255.255)が使える。

ただし、クラス A でも /8 で CIDR ブロックを取ることができず、/16 でなければならない。

## サブネット

サブネットは、VPC 内部に作るアドレスレンジである。

VPC では、/16 ~/28 まで設定できる。（IP アドレス数は 16~65536 個）

サブネット作成時にアベイラビリティゾーンを指定するが、作成後は変更できない。

サブネットごとにルートテーブルとネットワーク ACL を 1 つだけ指定する。

1 つの VPC で作れるサブネット数は 200 個。(リクエストすることで拡張できる)

サブネットの最初の 4 つと最後の 1 つのアドレスは予約されていて使用できない。(24 ビットマスクのサブネットだと使えないのは「0,1,2,3,255」の 5 つ)

必要以上にサブネットで分けるとアドレスの消費につながる。(28 ビットマスクで 16 個の IP が割り振られるが、実際は 11 個しか使えない)

サービスの中には IP アドレスの確保が必要な物がある。(ELB の場合は IP アドレスが 8 個)

## マルチ AZ

サブネット作成時は、同一の役割を持ったサブネットを複数の AZ に作成する。

これをマルチ AZ と呼ばれる。

インターネットゲートウェイ・ルートテーブル・ネットワーク ACL などを利用して、パブリックサブネットやプライベートサブネットといった役割を持つことができる。

## ルートテーブル

ルーティング設計によって、VPC 内部の通信や外部への通信を実装できる。

個々のサブネットに 1 つずつ設定する。

1 つのルートテーブルを複数のサブネットで共有できるが、1 つのサブネットに複数のルートテーブルを適用することはできない。

宛先アドレスとターゲットになるゲートウェイ(ネクストホップ)を指定する。

VPC にメインルートテーブルがあり、サブネット作成時に指定しない場合は VPC のルートテーブルになる。

## セキュリティグループ

VPC の通信制御はセキュリティグループとネットワーク ACL(NACL)を利用して行う。

セキュリティグループは、EC2 や ELB、RDS など、インスタンス単位の通信制御に利用する。

インスタンスには少なくとも 1 つのセキュリティグループをアタッチする必要がある。

通信制御としてはインバウンド(外部から VPC へ)とアウトバウンド(内部から外部へ)の両方の制御が可能である。

制御項目としては、プロトコル(TCP や UDP など)とポート範囲、送受信先の CIDR もしくはセキュリティグループを指定できる。

セキュリティグループはデフォルトでアクセスを拒否し、設定された項目のみアクセスを許可する。

## ネットワーク ACL

ネットワーク ACL(アクセスコントロールリスト)は、サブネットごとの通信制御に利用します。

通信制御としては、セキュリティグループと同じくインバウンととアウトバウンドの制御が可能である。

送受信先の CIDR とポートを指定できますが、セキュリティグループでの指定はできない。

ネットワーク ACL はデフォルトですべての通信を許可する。

セキュリティグループとネットワーク CL の違いは、状態(ステート)を保持するかどうかである。

## ゲートウェイ

ゲートウェイは、VPC の内部と外部との通信をやり取りする出入り口である。

インターネットゲートウェイ(IGW)は、VPC とインターネットとを接続するためのゲートウェイである。

各 VPC に 1 つだけアタッチすることができる。

インターネットゲートウェイ自体に設定事項はなく、論理的に 1 つしか見えないため、可用性の観点で単一障害点になる懸念があるが、AWS によるマネージドなサービスであるため、冗長化や障害児の復旧が自動的になされている。

ルートテーブルでインターネットゲートウェイをターゲットに指定すると、その宛先アドレスとの通信はインターネットゲートウェイを通してインターネットに向けられる。

多くの場合、デフォルトルート「0.0.0.0/0」を指定することになる。

パブリックサブネットの条件の 1 つは、ルーティングでインターネットゲートウェイを向いていることがある。

逆に言うと、プライベートサブネットはルーティングが直接インターネットゲートウェイに向いていないネットワークになる。

EC2 インスタンスがインターネットと通信するには、パブリック IP を持っていなければならない。

あるいは、NAT ゲートウェイを経由してインターネットと通信する。

NAT ゲートウェイはネットワークアドレス変換機能を有し、プライベート IP を NAT ゲートウェイが持つグローバル IP に変換し、外部と通信する。

## VPC エンドポイント

VPC ないからインターネット上の AWS サービスに接続する方法としては、インターネットゲートウェイを利用する方法と、VPC エンドポイントと呼ばれる特殊なゲートウェイを利用する方法がある。

VPC エンドポイントには、S3 や DynamoDB と接続する際に利用するゲートウェイエンドポイントと、それ以外の大多数のサービスで利用するインターフェイスエンドポイント(AWS PrivateLink)がある。

エンドポイントを作成しサブネットと関連付けると、そのサブネットから S3、DynamoDB への通信はインターネットゲートウェイではなくエンドポイントを通じて行われます。
