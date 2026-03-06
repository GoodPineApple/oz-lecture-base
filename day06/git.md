# ✅ 기초 터미널 / PowerShell + Git 문법 정리 (2026년 최신)

**작성일**: 2026년 3월  
**대상**: 초보자용 기초만 압축 정리  
**사용법**: 이 문서를 그대로 `.md` 파일로 저장해서 사용하세요!

---

## 1. 터미널 (Bash / zsh) — Mac / Linux

| 명령어          | 의미                  | 예시                                      |
|----------------|-----------------------|-------------------------------------------|
| `pwd`          | 현재 폴더 위치 확인   | `pwd`                                     |
| `ls`           | 파일/폴더 목록        | `ls -la` (숨김파일까지)                   |
| `cd`           | 폴더 이동             | `cd 폴더명`<br>`cd ..` (상위)<br>`cd ~` (홈) |
| `mkdir`        | 폴더 만들기           | `mkdir 새폴더`                            |
| `touch`        | 빈 파일 만들기        | `touch 파일.txt`                          |
| `rm`           | 삭제                  | `rm 파일.txt`<br>`rm -r 폴더` (폴더 전체) |
| `cp`           | 복사                  | `cp 파일.txt 복사본.txt`<br>`cp -r 폴더 복사본` |
| `mv`           | 이동 or 이름바꾸기    | `mv 파일.txt 새이름.txt`<br>`mv 파일.txt 다른폴더/` |
| `cat`          | 파일 내용 보기        | `cat 파일.txt`                            |
| `clear`        | 화면 지우기           | `clear` 또는 `Ctrl + L`                   |
| `echo`         | 출력                  | `echo "안녕"`<br>`echo "안녕" > 파일.txt` |

### 터미널 유용 팁
- `Tab` 키 → 자동완성
- `↑` `↓` 키 → 이전 명령어 재사용
- `history` → 명령어 기록 보기

---

## 2. PowerShell (Windows)

PowerShell은 **별칭(Alias)**이 많아서 Bash 명령어와 거의 동일하게 사용 가능합니다!

| PowerShell 명령어              | Bash 별칭       | 의미                  | 예시                                      |
|-------------------------------|-----------------|-----------------------|-------------------------------------------|
| `Get-Location`                | `pwd`           | 현재 위치             | `pwd`                                     |
| `Get-ChildItem`               | `ls` / `dir`    | 목록                  | `ls -Force` (숨김파일)                    |
| `Set-Location`                | `cd`            | 이동                  | `cd 폴더명`                               |
| `New-Item -ItemType Directory`| `mkdir`         | 폴더 만들기           | `mkdir 새폴더`                            |
| `New-Item`                    | `touch`         | 파일 만들기           | `New-Item 파일.txt`                       |
| `Remove-Item`                 | `rm`            | 삭제                  | `rm 파일.txt`<br>`rm -r 폴더`             |
| `Copy-Item`                   | `cp`            | 복사                  | `cp 파일.txt 복사본.txt`                  |
| `Move-Item`                   | `mv`            | 이동/이름변경         | `mv 파일.txt 새이름.txt`                  |
| `Get-Content`                 | `cat` / `type`  | 내용 보기             | `cat 파일.txt`                            |
| `Clear-Host`                  | `clear`         | 화면 지우기           | `cls`                                     |

### PowerShell 전용 팁
- `Get-Command` → 명령어 검색
- `Get-Help 명령어` → 도움말 (예: `Get-Help ls`)

---

## 3. Git 기본 문법 (터미널 / PowerShell 동일)

### ① 초기 설정 (한 번만 실행)
```bash
git config --global user.name "너의이름"
git config --global user.email "이메일@gmail.com"

```

### ② 기본 흐름 (가장 많이 쓰는 순서)

| 순서 | 명령어                          | 설명                    | 예시                                      |
|------|---------------------------------|-------------------------|-------------------------------------------|
| 1    | `git status`                    | 현재 상태 확인          | `git status`                              |
| 2    | `git add 파일명`                | 스테이지 올리기         | `git add .` (모든 변경사항 추가)          |
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

### ③ 브랜치 기본 명령어

```bash
git branch                  # 브랜치 목록 보기
git branch 새브랜치명       # 새 브랜치 생성
git switch 브랜치명         # 브랜치 이동 (최신 추천)
git checkout -b 새브랜치명  # 생성 + 이동 한 번에
git branch -d 브랜치명      # 브랜치 삭제
```

---

### ④ 자주 쓰는 기타 Git 명령어

| 명령어                          | 설명                          |
|---------------------------------|-------------------------------|
| `git log --oneline`             | 커밋 이력 간단히 보기         |
| `git log --graph --all`         | 브랜치 구조 그래프로 보기     |
| `git diff`                      | 수정된 내용 비교              |
| `git restore 파일명`            | 수정 내용 되돌리기            |
| `git stash`                     | 현재 작업 임시 저장           |
| `git stash pop`                 | 임시 저장 내용 복원           |
| `git remote -v`                 | 연결된 GitHub 주소 확인       |

---

### Git 한 줄 요약 (실무에서 제일 많이 쓰는 명령어)

```bash
git add . && git commit -m "설명" && git push  
```

---

```
