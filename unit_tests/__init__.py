import pytest
from vapronvapw import app


@pytest.fixture(name="client")
def app_client():
    client = app.test_client()
    yield client
