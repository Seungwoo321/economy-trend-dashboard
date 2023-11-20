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
data['Residuals'] = residuals

# 잔차 시각화
plt.figure(figsize=(10, 6))
plt.plot(data['Date'], data['Residuals'], label='Residuals')
plt.axhline(y=0, color='r', linestyle='--')

# X축 날짜 포맷 설정
plt.gca().xaxis.set_major_locator(mdates.MonthLocator())  # 월별로 표시
plt.gca().xaxis.set_major_formatter(
    mdates.DateFormatter('%Y-%m'))  # '년-월' 형식으로 표시

plt.title('KOSPI Overvaluation or Undervaluation Over Time (%)')
plt.xlabel('Date')
plt.ylabel('Residuals (%)')
plt.gca().yaxis.set_major_formatter(mtick.PercentFormatter())  # y축을 백분율 형식으로 표시
plt.legend()
plt.show()
