```markdown
# ✅ Git 기본 문법 정리 (완전판 - git clone 포함)

---

## ① Git 초기 설정 (한 번만 실행)

```bash
# 1. 사용자 정보 설정 (전역)
git config --global user.name "너의이름"
git config --global user.email "이메일@gmail.com"
```

> **팁**: 이 설정은 GitHub와 연동될 때 커밋 작성자로 표시됩니다.

---

## ② 저장소 시작하기 (두 가지 방법)

### 방법 1: 기존 저장소 복제하기 (git clone) — 가장 추천!
```bash
git clone https://github.com/사용자명/저장소명.git
cd 저장소명
```

### 방법 2: 새 저장소 만들기 (git init 방식)
```bash
git init
git remote add origin https://github.com/사용자명/저장소명.git
git remote -v                  # 연결 확인 (필수!)
```

> **연결 확인 명령어** (언제든지 사용)
> ```bash
> git remote -v
> ```

---

## ③ 기본 작업 흐름 (실무에서 가장 많이 쓰는 순서)

| 순서 | 명령어                          | 설명                    | 예시                                      |
|------|---------------------------------|-------------------------|-------------------------------------------|
| 1    | `git status`                    | 현재 상태 확인          | `git status`                              |
| 2    | `git add 파일명`                | 스테이지 올리기         | `git add .` (모든 변경사항)               |
| 3    | `git commit -m "메시지"`        | 커밋하기                | `git commit -m "feat: 로그인 기능 추가"`  |
| 4    | `git push`                      | 원격 저장소에 업로드    | `git push origin main`                    |
| 5    | `git pull`                      | 원격 저장소에서 내려받기| `git pull origin main`                    |

### 실제 작업 흐름 예시 (한 번에 실행)
```bash
git status
git add .
git commit -m "feat: 홈페이지 디자인 수정"
git push
```

---

## ④ 브랜치 기본 명령어

```bash
git branch                  # 브랜치 목록 보기
git branch 새브랜치명       # 새 브랜치 생성
git switch 브랜치명         # 브랜치 이동 (최신 추천)
git checkout -b 새브랜치명  # 생성 + 이동 한 번에
git branch -d 브랜치명      # 브랜치 삭제
```

---

## ⑤ 자주 쓰는 기타 Git 명령어

| 명령어                          | 설명                          |
|---------------------------------|-------------------------------|
| `git log --oneline`             | 커밋 이력 간단히 보기         |
| `git log --graph --all`         | 브랜치 구조 그래프로 보기     |
| `git diff`                      | 수정된 내용 비교              |
| `git restore 파일명`            | 수정 내용 되돌리기            |
| `git stash`                     | 현재 작업 임시 저장           |
| `git stash pop`                 | 임시 저장 내용 복원           |
| `git remote -v`                 | 연결된 원격 저장소 확인       |

---

### Git 한 줄 요약 (실무에서 제일 많이 쓰는 명령어)

```bash
git add . && git commit -m "설명" && git push
```

---
```
