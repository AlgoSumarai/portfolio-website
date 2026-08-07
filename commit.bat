@echo off

set  "COMMIT_MSG=%~1"

if "%COMMIT_MSG%"=="" (
    set "COMMIT_MSG=Automated deployment update"
)


echo adding files
call git add -A

echo committing
call git commit -m "%COMMIT_MSG%"

echo pushing to main
call git push

echo Repo Updated succesfully!! :)
