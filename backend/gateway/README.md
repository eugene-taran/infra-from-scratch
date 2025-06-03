## How to build image

Go to the `backend` directory and run:

```bash
docker build -f gateway/Dockerfile -t gateway .
```

## How to run image

```bash
docker run -p 3000:3000 gateway
```

## How to run github actions with act locally

- Install act
```bash
brew install act
```

- Create token with repository:write permission, go to link:
https://github.com/settings/tokens/new?scopes=write:packages
and create a token. It's not possible to select it the UI write:packages only, because github will also select full repo access
for you each time when you select `write:packages` scope. See [GitHub Docs on working with the container registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)

- Run the following command in the root directory of the repo (infra-from-scratch):
```bash
act -P ubuntu-latest=catthehacker/ubuntu:act-latest -s GITHUB_TOKEN=<YOUR_GITHUB_TOKEN>
```bash
