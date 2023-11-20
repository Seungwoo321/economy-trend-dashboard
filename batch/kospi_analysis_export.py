import pandas as pd
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt
import matplotlib.ticker as mtick
import matplotlib.dates as mdates

# 데이터 불러오기
data = pd.read_csv('data.csv')
data['Date'] = pd.to_datetime(data['Date'])

# 코스피 지수와 일평균 수출금액을 각각 X, y로 지정
X = data[['KOSPI']]  # 설명 변수 (코스피 지수)
y = data['Export'] * 100  # 종속 변수 (일평균 수출금액)

# 선형 회귀 모델 생성 및 훈련
model = LinearRegression()
model.fit(X, y)

# 잔차 계산 및 백분율 변환
y_pred = model.predict(X)
residuals = (y_pred - y) / y_pred * 100  # 백분율로 변환
data['value'] = residuals


### ts 파일로 저장하기
# 'Date' 열 이름을 'date'로 변경
data.rename(columns={'Date': 'month'}, inplace=True)
# 날짜 포맷 변경 (YYYY.MM)
data['month'] = data['month'].dt.strftime('%Y.%m')

# 필요한 열만 선택
data = data[['month', 'value']]

# 결과 데이터를 JSON 문자열로 변환
json_str = data.to_json(orient='records')

# TypeScript 파일로 저장
with open('result_data.ts', 'w') as file:
    file.write("import { DataPoint } from \"@/types\";\n")
    file.write("export const data: DataPoint[] = ")
    file.write(json_str)
    file.write(";")