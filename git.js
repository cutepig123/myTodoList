git log --pretty=format:"%h - %an, %ar : %s" >1.txt

http://git-scm.com/book/en/Git-Basics-Viewing-the-Commit-History


1) git get different files between 2 commit
git diff --name-only SHA1 SHA2
git diff-tree -r --no-commit-id --name-only --diff-filter=ACMRT $commit_id
git archive -o patch.zip a9359f9 $(git diff --name-only a9359f9^..a9359f9)

